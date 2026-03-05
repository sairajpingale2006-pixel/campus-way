import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { getRoomsByWing, addRoom, updateRoom, deleteRoom, type Room } from '@/lib/roomStorage';
import { LogOut, Plus, Edit, Trash2, School, Save, X } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [selectedWing, setSelectedWing] = useState<'Left Wing' | 'Centre Wing' | 'Right Wing'>('Left Wing');
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingRoom, setEditingRoom] = useState<Room | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAddMode, setIsAddMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    in_charge: '',
    contact: '',
    directions: '',
  });

  useEffect(() => {
    // Set page title
    document.title = 'CampusWay !!! - Admin Dashboard';
    checkAuth();
  }, []);

  useEffect(() => {
    loadRooms();
  }, [selectedWing]);

  const checkAuth = () => {
    const isAuthenticated = localStorage.getItem('amgoi_admin_auth') === 'true';
    if (!isAuthenticated) {
      navigate('/admin');
    }
  };

  const loadRooms = () => {
    setLoading(true);
    const data = getRoomsByWing(selectedWing);
    setRooms(data);
    setLoading(false);
  };

  const handleSignOut = () => {
    localStorage.removeItem('amgoi_admin_auth');
    navigate('/admin');
  };

  const handleAddRoom = () => {
    setIsAddMode(true);
    setEditingRoom(null);
    setFormData({
      name: '',
      location: '',
      in_charge: '',
      contact: '',
      directions: '',
    });
    setIsDialogOpen(true);
  };

  const handleEditRoom = (room: Room) => {
    setIsAddMode(false);
    setEditingRoom(room);
    setFormData({
      name: room.name,
      location: room.location || '',
      in_charge: room.in_charge || '',
      contact: room.contact || '',
      directions: room.directions || '',
    });
    setIsDialogOpen(true);
  };

  const handleDeleteRoom = (id: string) => {
    if (!confirm('Are you sure you want to delete this room?')) return;

    const success = deleteRoom(id);
    if (success) {
      loadRooms();
    }
  };

  const handleSaveRoom = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    if (!formData.name.trim()) {
      alert('Room name is required');
      return;
    }

    setSaving(true);

    try {
      if (isAddMode) {
        const newRoom = addRoom({
          wing: selectedWing,
          name: formData.name.trim(),
          location: formData.location.trim() || undefined,
          in_charge: formData.in_charge.trim() || undefined,
          contact: formData.contact.trim() || undefined,
          directions: formData.directions.trim() || undefined,
        });

        if (newRoom) {
          loadRooms();
          setIsDialogOpen(false);
          setFormData({
            name: '',
            location: '',
            in_charge: '',
            contact: '',
            directions: '',
          });
        } else {
          alert('Failed to add room. Please try again.');
        }
      } else if (editingRoom) {
        const updated = updateRoom(editingRoom.id, {
          name: formData.name.trim(),
          location: formData.location.trim() || undefined,
          in_charge: formData.in_charge.trim() || undefined,
          contact: formData.contact.trim() || undefined,
          directions: formData.directions.trim() || undefined,
        });

        if (updated) {
          loadRooms();
          setIsDialogOpen(false);
        } else {
          alert('Failed to update room. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error saving room:', error);
      alert('An error occurred while saving the room.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-lg">
              <School className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">{"AMGOI Campus Admin"}</h1>
              <p className="text-xs text-muted-foreground">Room Management Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={() => navigate('/')}>
              View Campus
            </Button>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Wing Selector Card */}
        <Card>
          <CardHeader>
            <CardTitle>Select Wing</CardTitle>
            <CardDescription>Choose a wing to manage its rooms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3">
              {(['Left Wing', 'Centre Wing', 'Right Wing'] as const).map((wing) => (
                <Button
                  key={wing}
                  variant={selectedWing === wing ? 'default' : 'outline'}
                  onClick={() => setSelectedWing(wing)}
                  className="flex-1"
                >
                  {wing}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Rooms Table Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  {selectedWing} Rooms
                  <Badge variant="secondary">{rooms.length}</Badge>
                </CardTitle>
                <CardDescription>Manage room information and details</CardDescription>
              </div>
              <Button onClick={handleAddRoom}>
                <Plus className="h-4 w-4 mr-2" />
                Add Room
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8 text-muted-foreground">Loading rooms...</div>
            ) : rooms.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No rooms found. Click "Add Room" to create one.
              </div>
            ) : (
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Room Name</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>In-charge</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rooms.map((room) => (
                      <TableRow key={room.id}>
                        <TableCell className="font-medium">{room.name}</TableCell>
                        <TableCell>{room.location || '—'}</TableCell>
                        <TableCell>{room.in_charge || '—'}</TableCell>
                        <TableCell>{room.contact || '—'}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleEditRoom(room)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteRoom(room.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
      {/* Edit/Add Room Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{isAddMode ? 'Add New Room' : 'Edit Room'}</DialogTitle>
            <DialogDescription>
              {isAddMode
                ? `Add a new room to ${selectedWing}`
                : 'Update room information and details'}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSaveRoom}>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Room Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Computer Lab"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g., FL-01"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="in_charge">In-charge</Label>
                <Input
                  id="in_charge"
                  value={formData.in_charge}
                  onChange={(e) => setFormData({ ...formData, in_charge: e.target.value })}
                  placeholder="e.g., John Doe"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">Contact</Label>
                <Input
                  id="contact"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  placeholder="e.g., 9876543210"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="directions">Directions</Label>
                <Textarea
                  id="directions"
                  value={formData.directions}
                  onChange={(e) => setFormData({ ...formData, directions: e.target.value })}
                  placeholder="e.g., Entrance → Left Wing → 1st Floor → Turn Right"
                  rows={4}
                />
              </div>
            </div>

            <DialogFooter>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsDialogOpen(false)}
                disabled={saving}
              >
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
              <Button type="submit" disabled={saving}>
                <Save className="h-4 w-4 mr-2" />
                {saving ? 'Saving...' : (isAddMode ? 'Add Room' : 'Save Changes')}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;
