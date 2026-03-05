// Local storage key
const STORAGE_KEY = 'amgoi_campus_rooms';
const STORAGE_EVENT = 'amgoi_rooms_updated';

export interface Room {
  id: string;
  wing: 'Left Wing' | 'Centre Wing' | 'Right Wing';
  name: string;
  location?: string;
  in_charge?: string;
  contact?: string;
  directions?: string;
}

// Initial room data
const initialRooms: Room[] = [
  // Left Wing
  { 
    id: '101', 
    wing: 'Left Wing',
    name: 'Exam Cell',
    location: 'FL-01',
    in_charge: 'R P Patil',
    contact: '8855903003',
    directions: "Entrance → Left Wing → 1st Floor → Turn Left → You'll find Exam Cell"
  },
  { 
    id: '102', 
    wing: 'Left Wing',
    name: 'First Year HOD Cabin',
    location: 'Near FL-03',
    in_charge: 'Amol A. Suryavanshi',
    contact: '9970028737',
    directions: 'Entrance → Left Wing → 1st Floor → Turn Left → Exam Cell → Go Straight → Turn Right → FY HOD Cabin'
  },
  { 
    id: '103', 
    wing: 'Left Wing',
    name: 'Seminar Hall',
    location: 'FL-10',
    directions: 'Entrance → Left Wing → 1st Floor → Turn Right'
  },
  { 
    id: '104', 
    wing: 'Left Wing',
    name: 'Physics Lab',
    location: 'SL-07',
    in_charge: 'A L Chavan',
    contact: '8055899898',
    directions: "Entrance → Left Wing → 2nd Floor → Turn Left → You'll Find Physics Lab"
  },
  { 
    id: '105', 
    wing: 'Left Wing',
    name: 'Engg. Mechanics Lab',
    location: 'SL-01',
    in_charge: 'B R Mali',
    contact: '9503219059',
    directions: 'Entrance → Left Wing → 2nd Floor → Go Straight → Turn Left'
  },
  { 
    id: '106', 
    wing: 'Left Wing',
    name: 'Computational Lab',
    location: 'SL-10',
    in_charge: 'Prathamesh Ghatage',
    contact: '9834587810',
    directions: "Entrance → Left Wing → 2nd Floor → Turn Right → You'll Find Computational Lab"
  },
  // Centre Wing
  { 
    id: '201', 
    wing: 'Centre Wing',
    name: 'Central Library',
    location: 'Opposite to MBA Dept.',
    in_charge: 'Laxman Khadtare',
    contact: '9503442145',
    directions: "Entrance → Central Stairs → 1st Floor → Turn Right → You'll Find Central Library"
  },
  { 
    id: '202', 
    wing: 'Centre Wing',
    name: 'Administration Office',
    location: 'Near Entrance',
    in_charge: 'Rahul B. Bodake',
    contact: '9028307500',
    directions: 'Entrance → Turn Left'
  },
  { 
    id: '203', 
    wing: 'Centre Wing',
    name: 'Store',
    location: 'Near Centre Wing',
    in_charge: 'Avinash Patil',
    contact: '9527824274',
    directions: 'Entrance → Centre Wing → You will find Store'
  },
  // Right Wing
  { 
    id: '301', 
    wing: 'Right Wing',
    name: 'Department Of Mechanical Engineering',
    location: 'GR 03',
    directions: 'Entrance → Right Wing → Ground Floor → Move Left → You will reach Department Of Mechanical Engineering'
  },
  { 
    id: '302', 
    wing: 'Right Wing',
    name: 'Air Conditioning Laboratory',
    location: 'GR 01',
    directions: 'Entrance → Right Wing → Ground Floor → Move Left → Walk Straight → You will reach'
  },
  { 
    id: '303', 
    wing: 'Right Wing',
    name: 'CAD/CAM / Incubation Centre / Research and Development Cell',
    location: 'GR 08',
    directions: 'Entrance → Right Wing → Ground Floor → Move Right → Walk Straight → You will reach'
  },
  { 
    id: '304', 
    wing: 'Right Wing',
    name: 'Chemistry Laboratory',
    location: 'GR 09',
    directions: 'Entrance → Right Wing → Ground Floor → Move Right → Walk Straight → You will reach'
  },
  { 
    id: '305', 
    wing: 'Right Wing',
    name: 'Board Room',
    location: 'Ground Floor (Left side of Right Wing)',
    directions: 'Entrance → Right Wing → Ground Floor → Move Left → On your left hand → You will reach'
  },
  { 
    id: '306', 
    wing: 'Right Wing',
    name: 'Department Of Computer Science',
    location: 'FR 03',
    directions: 'Entrance → Right Wing → 1st Floor → Move Left → You will reach Department Of Computer Science'
  },
  { 
    id: '307', 
    wing: 'Right Wing',
    name: 'Project / Network Laboratory',
    location: 'FR 01',
    directions: 'Entrance → Right Wing → 1st Floor → Move Left → You will reach Project and Network Laboratory'
  },
  { 
    id: '308', 
    wing: 'Right Wing',
    name: 'Server Room and Advanced Computing Laboratory',
    location: 'FR 05',
    directions: 'Entrance → Right Wing → 1st Floor → Move Left → You will reach Server Room and Advanced Computing Laboratory'
  },
  { 
    id: '309', 
    wing: 'Right Wing',
    name: 'Web Technology Laboratory and Database Laboratory',
    location: 'FR 09',
    in_charge: 'S.S. Sarade',
    contact: '9011464838',
    directions: 'Entrance → Right Wing → 1st Floor → Move Right → You will reach Web Technology Laboratory and Database Laboratory'
  },
  { 
    id: '310', 
    wing: 'Right Wing',
    name: 'Department Of AIDS with System Programming Laboratory Programming Laboratory I/II',
    location: 'FR 08',
    in_charge: 'S.S. Sarade',
    contact: '9011464838',
    directions: 'Entrance → Right Wing → 1st Floor → Move Right → You will reach Department Of AIDS with System Programming Laboratory'
  },
  { 
    id: '311', 
    wing: 'Right Wing',
    name: 'Department Of Electronics and Tele-Communication',
    location: 'SR 03',
    in_charge: 'D.J. Pawar',
    contact: '9665159556',
    directions: 'Entrance → Right Wing → 2nd Floor → Move Left → You will reach Department Of Electronics and Tele-Communication'
  },
  { 
    id: '312', 
    wing: 'Right Wing',
    name: 'Industry Institute Interaction Laboratory',
    location: 'SR 04',
    in_charge: 'D.J. Pawar',
    contact: '9665159556',
    directions: 'Entrance → Right Wing → 2nd Floor → Move Left → You will reach Industry Institute Interaction Laboratory'
  },
  { 
    id: '313', 
    wing: 'Right Wing',
    name: 'Yoga and Meditation Hall',
    location: 'SR 11',
    directions: 'Entrance → Right Wing → 2nd Floor → Move Right → You will reach Yoga and Meditation Hall'
  },
  { 
    id: '314', 
    wing: 'Right Wing',
    name: 'Cultural Club',
    location: 'SR 10',
    directions: 'Entrance → Right Wing → 2nd Floor → Move Right → You will reach Cultural Club'
  },
];

// Notify listeners that rooms have been updated
const notifyRoomsUpdated = () => {
  window.dispatchEvent(new CustomEvent(STORAGE_EVENT));
};

// Initialize storage with default data if not exists
const initializeStorage = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialRooms));
  }
};

// Get all rooms
export const getAllRooms = (): Room[] => {
  initializeStorage();
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : initialRooms;
};

// Get rooms by wing
export const getRoomsByWing = (wing: string): Room[] => {
  const allRooms = getAllRooms();
  return allRooms.filter(room => room.wing === wing);
};

// Add a new room
export const addRoom = (room: Omit<Room, 'id'>): Room => {
  const allRooms = getAllRooms();
  const newRoom: Room = {
    ...room,
    id: Date.now().toString(), // Simple ID generation
  };
  allRooms.push(newRoom);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allRooms));
  notifyRoomsUpdated();
  return newRoom;
};

// Update a room
export const updateRoom = (id: string, updates: Partial<Omit<Room, 'id'>>): Room | null => {
  const allRooms = getAllRooms();
  const index = allRooms.findIndex(room => room.id === id);
  
  if (index === -1) return null;
  
  allRooms[index] = { ...allRooms[index], ...updates };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allRooms));
  notifyRoomsUpdated();
  return allRooms[index];
};

// Delete a room
export const deleteRoom = (id: string): boolean => {
  const allRooms = getAllRooms();
  const filtered = allRooms.filter(room => room.id !== id);
  
  if (filtered.length === allRooms.length) return false;
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  notifyRoomsUpdated();
  return true;
};

// Subscribe to room updates
export const subscribeToRoomUpdates = (callback: () => void) => {
  window.addEventListener(STORAGE_EVENT, callback);
  return () => window.removeEventListener(STORAGE_EVENT, callback);
};
