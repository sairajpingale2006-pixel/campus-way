import { supabase } from './supabase';

export interface Room {
  id: string;
  wing: 'Left Wing' | 'Centre Wing' | 'Right Wing';
  name: string;
  location?: string;
  in_charge?: string;
  contact?: string;
  directions?: string;
  created_at?: string;
  updated_at?: string;
}

// Fetch all rooms by wing
export async function getRoomsByWing(wing: string): Promise<Room[]> {
  const { data, error } = await supabase
    .from('rooms')
    .select('*')
    .eq('wing', wing)
    .order('name', { ascending: true });

  if (error) {
    console.error('Error fetching rooms:', error);
    return [];
  }

  return Array.isArray(data) ? data : [];
}

// Fetch all rooms
export async function getAllRooms(): Promise<Room[]> {
  const { data, error } = await supabase
    .from('rooms')
    .select('*')
    .order('wing', { ascending: true })
    .order('name', { ascending: true });

  if (error) {
    console.error('Error fetching all rooms:', error);
    return [];
  }

  return Array.isArray(data) ? data : [];
}

// Create a new room
export async function createRoom(room: Omit<Room, 'id' | 'created_at' | 'updated_at'>): Promise<Room | null> {
  const { data, error } = await supabase
    .from('rooms')
    .insert([room])
    .select()
    .maybeSingle();

  if (error) {
    console.error('Error creating room:', error);
    return null;
  }

  return data;
}

// Update a room
export async function updateRoom(id: string, updates: Partial<Omit<Room, 'id' | 'created_at' | 'updated_at'>>): Promise<Room | null> {
  const { data, error } = await supabase
    .from('rooms')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .maybeSingle();

  if (error) {
    console.error('Error updating room:', error);
    return null;
  }

  return data;
}

// Delete a room
export async function deleteRoom(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('rooms')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting room:', error);
    return false;
  }

  return true;
}

// Auth functions
export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error('Error signing in:', error);
    return { user: null, error };
  }

  return { user: data.user, error: null };
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  
  if (error) {
    console.error('Error signing out:', error);
  }
  
  return { error };
}

export async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser();
  
  if (error) {
    console.error('Error getting current user:', error);
    return null;
  }
  
  return user;
}
