# AMGOI Campus Gateway - Admin Access

## Admin Dashboard

The admin dashboard allows authorized users to manage campus room information across all three wings.

### Accessing the Admin Dashboard

1. Navigate to `/admin` in your browser
2. Sign in with the following credentials:
   - **Username**: `admin`
   - **Password**: `admin123`
3. You will be redirected to the admin dashboard

### Default Admin Credentials

```
Username: admin
Password: admin123
```

### Admin Features

- **Wing Selection**: Switch between Left Wing, Centre Wing, and Right Wing
- **View Rooms**: See all rooms in a table format with details
- **Add Room**: Create new room entries with full information
- **Edit Room**: Update existing room details
- **Delete Room**: Remove rooms from the directory
- **Real-time Updates**: Changes are immediately reflected on the public campus navigation
- **Logout**: Sign out and return to the login page

### Database Structure

The system uses a single `rooms` table with the following fields:

- `id`: UUID (auto-generated)
- `wing`: Text (Left Wing, Centre Wing, or Right Wing)
- `name`: Text (required)
- `location`: Text (optional)
- `in_charge`: Text (optional)
- `contact`: Text (optional)
- `directions`: Text (optional)
- `created_at`: Timestamp
- `updated_at`: Timestamp

### Security

- Public users can only read room data
- Admin authentication uses simple credential validation
- Admin session is stored in localStorage
- Logout clears the authentication state
- Row Level Security (RLS) is enabled on the rooms table for database-level protection
