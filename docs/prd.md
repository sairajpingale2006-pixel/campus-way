# 3D Campus Entrance Scene Requirements Document

## 1. Application Overview

### 1.1 Application Name
3D Campus Entrance Scene

### 1.2 Application Description
A realistic 3D visualization scene built with Three.js, displaying a modern institutional campus entrance with three connected academic wings for a navigation system. The scene features a professional entrance gate structure with a wide campus plaza, walkways, greenery, three academic buildings, interactive wing directory system with room listings, camera navigation capabilities, and a floating AI chatbot access button. The application includes an admin dashboard for managing campus room information.

## 2. Scene Components

### 2.1 Camera Setup
- Type: Perspective camera
- Positioning: Slight angled view facing the entrance, with the walkway leading the viewer's eye toward the structure and campus buildings
- Purpose: Provide optimal viewing angle of the campus entrance, plaza, and three academic wings
- Dynamic Behavior: Camera can smoothly transition to focus on selected wing buildings

### 2.2 Lighting System
- Ambient Light: Realistic ambient lighting for overall scene illumination
- Directional Light: Directional sunlight source creating soft shadows
- Effect: Realistic daylight atmosphere
- Background: Light sky color background

### 2.3 Ground System
- **Central Walkway**: Light concrete paved walkway leading toward the entrance building and extending to connect the academic wings
- **Grass Areas**: Green grass areas on both sides of the walkway and around the buildings
- **Entrance Platform**: Slight elevation platform where the entrance structure sits
- **Connecting Walkways**: Pathways connecting the three academic wings
- Overall Design: Clean campus ground with natural campus feel

### 2.4 Campus Plaza Environment
- Layout: Wide campus plaza with paved walkway as the central path
- Greenery: Several simple low-poly trees placed along the sides of the walkway
- Atmosphere: Real campus environment feel

### 2.5 Entrance Gate Architecture
- **Structure Design**:
  - Two large rectangular pillars
  - A horizontal beam connecting the pillars at the top
  - Clean institutional architecture style
- **Material**: Light concrete material with dark accent lines for modern style
- **Visual Style**: Modern campus entrance gate

### 2.6 Campus Sign
- Content: Text displaying KRISHIMITRA CAMPUS
- Position: Floating above the horizontal beam of the entrance gate
- Font: Simple and readable

### 2.7 Academic Buildings

#### 2.7.1 Centre Wing
- **Position**: Directly in front of the entrance walkway, further into the campus
- **Function**: Central academic building
- **Architecture Style**: Light concrete material with dark accent lines, matching the entrance gate style
- **Design**: Larger academic building, low-poly but modern
- **Label**: Floating text Centre Wing above the building

#### 2.7.2 Left Wing
- **Position**: Left side of the Centre Wing, slightly angled to feel naturally connected to the central campus layout
- **Function**: Academic building
- **Architecture Style**: Light concrete material with dark accent lines, matching the entrance gate and Centre Wing style
- **Design**: Similar to Centre Wing, low-poly but modern
- **Label**: Floating text Left Wing above the building

#### 2.7.3 Right Wing
- **Position**: Right side of the Centre Wing, positioned symmetrically to the Left Wing
- **Function**: Academic building
- **Architecture Style**: Light concrete material with dark accent lines, matching the entrance gate and other wings style
- **Design**: Similar to Centre Wing, low-poly but modern
- **Label**: Floating text Right Wing above the building

## 3. Interaction Features

### 3.1 Click Interaction

#### 3.1.1 Entrance Gate
- Target: Entrance gate structure
- Behavior: When the entrance gate is clicked, execute console.log(Entrance selected)

#### 3.1.2 Left Wing
- Target: Left Wing building
- Behavior: When the Left Wing is clicked:
  1. Camera smoothly moves toward the Left Wing building to make it the main focus
  2. Display the wing directory panel on the right side of the screen
  3. Show Left Wing room listings in the panel
  4. Execute console.log(Left Wing clicked)

#### 3.1.3 Centre Wing
- Target: Centre Wing building
- Behavior: When the Centre Wing is clicked:
  1. Camera smoothly moves toward the Centre Wing building to make it the main focus
  2. Display the wing directory panel on the right side of the screen
  3. Show Centre Wing room listings in the panel
  4. Execute console.log(Centre Wing clicked)

#### 3.1.4 Right Wing
- Target: Right Wing building
- Behavior: When the Right Wing is clicked:
  1. Camera smoothly moves toward the Right Wing building to make it the main focus
  2. Display the wing directory panel on the right side of the screen
  3. Show Right Wing place listings in the panel
  4. Execute console.log(Right Wing clicked)

### 3.2 Wing Directory System

#### 3.2.1 Directory Panel Design
- **Position**: Right side of the screen
- **Visual Style**: Clean modern emerald glass-style panel
- **Layout Structure**:
  - Wing Name (header)
  - Room List (body)
  - Back to Campus button (footer)

#### 3.2.2 Room Data
Use the following data for room listings:

**Left Wing**
- Exam Cell
- FY HOD Cabin
- Seminar Hall
- Physics Lab
- Engg. Mechanics Lab
- Computational Lab

**Centre Wing**
- Central Library
- Administration Office
- Store

**Right Wing**
- Department Of Mechanical Engineering
- Air Conditioning Laboratory
- CAD/CAM / Incubation Centre / Research and Development Cell
- Chemistry Laboratory
- Board Room
- Department Of Computer Science
- Project / Network Laboratory
- Server Room and Advanced Computing Laboratory
- Web Technology Laboratory and Database Laboratory
- Department Of AIDS with System Programming Laboratory Programming Laboratory I/II
- Department Of Electronics and Tele-Communication
- Industry Institute Interaction Laboratory
- Yoga and Meditation Hall
- Cultural Club

#### 3.2.3 Room List Display
- Each room appears as a clickable list item
- Display format: Place name only, without numbers or indexes

#### 3.2.4 Left Wing Room Information View
- **Trigger**: When a user clicks a room name in the Left Wing room list
- **Behavior**: Replace the room list with a detailed room information page
- **Information Display**:
  - Room Name
  - Location
  - In-charge
  - Contact
  - Directions
- **Navigation**: Back to Room List button at the top of the information page
- **Back Button Behavior**: When clicked, return to the Left Wing room list view

#### 3.2.5 Left Wing Room Information Data

**Exam Cell**
- Location: FL-01
- In-charge: R P Patil
- Contact: 8855903003
- Directions: Entrance → Left Wing → 1st Floor → Turn Left → You'll find Exam Cell

**FY HOD Cabin**
- Location: Near FL-03
- In-charge: Amol A. Suryavanshi
- Contact: 9970028737
- Directions: Entrance → Left Wing → 1st Floor → Turn Left → Exam Cell → Go Straight → Turn Right → FY HOD Cabin

**Seminar Hall**
- Location: FL-10
- Directions: Entrance → Left Wing → 1st Floor → Turn Right

**Physics Lab**
- Location: SL-07
- In-charge: A L Chavan
- Contact: 8055899898
- Directions: Entrance → Left Wing → 2nd Floor → Turn Left → You'll Find Physics Lab

**Engg. Mechanics Lab**
- Location: SL-01
- In-charge: B R Mali
- Contact: 9503219059
- Directions: Entrance → Left Wing → 2nd Floor → Go Straight → Turn Left

**Computational Lab**
- Location: SL-10
- In-charge: Prathamesh Ghatage
- Contact: 9834587810
- Directions: Entrance → Left Wing → 2nd Floor → Turn Right → You'll Find Computational Lab

#### 3.2.6 Centre Wing Room Information View
- **Trigger**: When a user clicks a place name in the Centre Wing room list
- **Behavior**: Replace the room list with a detailed room information page
- **Information Display**:
  - Place Name
  - Location
  - In-charge
  - Contact
  - Directions
- **Navigation**: Back to Room List button at the top of the information page
- **Back Button Behavior**: When clicked, return to the Centre Wing room list view

#### 3.2.7 Centre Wing Room Information Data

**Central Library**
- Location: Opposite to MBA Dept.
- In-charge: Laxman Khadtare
- Contact: 9503442145
- Directions: Entrance → Central Stairs → 1st Floor → Turn Right → You'll Find Central Library

**Administration Office**
- Location: Near Entrance
- In-charge: Rahul B. Bodake
- Contact: 9028307500
- Directions: Entrance → Turn Left

**Store**
- Location: Near Centre Wing
- In-charge: Avinash Patil
- Contact: 9527824274
- Directions: Entrance → Centre Wing → You will find Store

#### 3.2.8 Right Wing Place Information View
- **Trigger**: When a user clicks a place name in the Right Wing place list
- **Behavior**: Replace the room list with a detailed room information page
- **Information Display**:
  - Place Name
  - Location
  - In-charge (if available)
  - Contact (if available)
  - Directions
- **Field Display Rule**: If in-charge or contact information is missing, omit those fields instead of displaying placeholders
- **Navigation**: Back to Room List button at the top of the information page
- **Back Button Behavior**: When clicked, return to the Right Wing place list view

#### 3.2.9 Right Wing Place Information Data

**Department Of Mechanical Engineering**
- Location: GR 03
- Directions: Entrance → Right Wing → Ground Floor → Move Left → You will reach Department Of Mechanical Engineering

**Air Conditioning Laboratory**
- Location: GR 01
- Directions: Entrance → Right Wing → Ground Floor → Move Left → Walk Straight → You will reach

**CAD/CAM / Incubation Centre / Research and Development Cell**
- Location: GR 08
- Directions: Entrance → Right Wing → Ground Floor → Move Right → Walk Straight → You will reach

**Chemistry Laboratory**
- Location: GR 09
- Directions: Entrance → Right Wing → Ground Floor → Move Right → Walk Straight → You will reach

**Board Room**
- Location: Ground Floor (Left side of Right Wing)
- Directions: Entrance → Right Wing → Ground Floor → Move Left → On your left hand → You will reach

**Department Of Computer Science**
- Location: FR 03
- Directions: Entrance → Right Wing → 1st Floor → Move Left → You will reach Department Of Computer Science

**Project / Network Laboratory**
- Location: FR 01
- Directions: Entrance → Right Wing → 1st Floor → Move Left → You will reach Project and Network Laboratory

**Server Room and Advanced Computing Laboratory**
- Location: FR 05
- Directions: Entrance → Right Wing → 1st Floor → Move Left → You will reach Server Room and Advanced Computing Laboratory

**Web Technology Laboratory and Database Laboratory**
- Location: FR 09
- In-charge: S.S. Sarade
- Contact: 9011464838
- Directions: Entrance → Right Wing → 1st Floor → Move Right → You will reach Web Technology Laboratory and Database Laboratory

**Department Of AIDS with System Programming Laboratory Programming Laboratory I/II**
- Location: FR 08
- In-charge: S.S. Sarade
- Contact: 9011464838
- Directions: Entrance → Right Wing → 1st Floor → Move Right → You will reach Department Of AIDS with System Programming Laboratory

**Department Of Electronics and Tele-Communication**
- Location: SR 03
- In-charge: D.J. Pawar
- Contact: 9665159556
- Directions: Entrance → Right Wing → 2nd Floor → Move Left → You will reach Department Of Electronics and Tele-Communication

**Industry Institute Interaction Laboratory**
- Location: SR 04
- In-charge: D.J. Pawar
- Contact: 9665159556
- Directions: Entrance → Right Wing → 2nd Floor → Move Left → You will reach Industry Institute Interaction Laboratory

**Yoga and Meditation Hall**
- Location: SR 11
- Directions: Entrance → Right Wing → 2nd Floor → Move Right → You will reach Yoga and Meditation Hall

**Cultural Club**
- Location: SR 10
- Directions: Entrance → Right Wing → 2nd Floor → Move Right → You will reach Cultural Club

#### 3.2.10 Back to Campus Navigation
- **Button**: Back to Campus button displayed in the directory panel
- **Behavior**: When the button is clicked:
  1. Camera smoothly returns to the original campus overview position
  2. Directory panel closes

### 3.3 AI Chatbot Access Button

#### 3.3.1 Button Placement
- **Position**: Fixed to the bottom-right corner of the screen
- **CSS Properties**:
  - position: fixed
  - bottom: 24px
  - right: 24px
  - z-index: 1000
- **Visibility**: Always visible above the 3D campus scene

#### 3.3.2 Button Design
- **Style**: Rounded pill-style button
- **Visual Effect**: Glassmorphism style with emerald gradient
- **Background**: Soft blur background
- **Shadow**: Subtle shadow
- **Animation**: Smooth hover animation with slight glow or lift effect
- **Text**: 💬 Need Help?

#### 3.3.3 Button Behavior
- **Click Action**: Open AI chatbot page in a new browser tab
- **Target URL**: https://campusway-ai.zapier.app
- **Implementation**: window.open(https://campusway-ai.zapier.app, _blank)

#### 3.3.4 Functional Requirements
- **Visibility**: Button must remain visible on all pages:
  - Main campus view
  - Left Wing
  - Centre Wing
  - Right Wing
- **Interaction**: Button must not block or interfere with 3D scene interactions
- **Pointer Events**: Ensure pointer events only affect the button itself

#### 3.3.5 Mobile Compatibility
- **Responsive Design**: On small screens, reduce button padding while keeping it visible in the bottom-right corner

## 4. Admin Dashboard

### 4.1 Admin Route
- **Route**: /admin
- **Access**: Hidden route, not visible in public navigation

### 4.2 Admin Login
- **Login Screen**: Simple login interface displayed before accessing the dashboard
- **Authentication**: Admin credentials required to access dashboard

### 4.3 Dashboard Layout
- **Design Style**: Clean modern admin dashboard with cards and tables
- **Separation**: Admin interface is separate from the public campus navigation UI

### 4.4 Wing Selector
- **Function**: Allow admin to choose between Left Wing, Centre Wing, and Right Wing
- **Behavior**: When a wing is selected, display the corresponding rooms table

### 4.5 Rooms Table
- **Display**: Show all rooms of the selected wing in a table format
- **Columns**:
  - Room Name
  - Location
  - In-charge
  - Contact

### 4.6 Edit Room
- **Trigger**: Edit button for each room entry
- **Behavior**: Opens a form to modify room information
- **Editable Fields**:
  - Room Name
  - Location
  - In-charge
  - Contact
  - Directions

### 4.7 Add Room
- **Function**: Button to create a new room entry for the selected wing
- **Behavior**: Opens a form to input new room information

### 4.8 Delete Room
- **Function**: Allow removing a room from the directory
- **Behavior**: Delete button for each room entry

### 4.9 Save Changes
- **Function**: Save button to update campus directory data
- **Behavior**: When changes are saved, update the campus directory data used by the public website

## 5. Scene Style Guidelines

### 5.1 Visual Style
- Professional institutional design
- Clean campus environment
- Low-poly but visually appealing
- Realistic campus atmosphere
- Consistent architectural style across all buildings
- Soft shadows and consistent lighting
- Modern emerald glass-style UI panel design

### 5.2 Technical Constraints
- No physics simulation
- No walking controls
- Static scene presentation with dynamic camera transitions
- Do not change the 3D campus layout

## 6. Application Purpose
This is a realistic static visualization scene designed for a campus navigation system, providing users with a clear and professional view of the KRISHIMITRA CAMPUS main entrance location and three connected academic wings (Left Wing, Centre Wing, Right Wing), along with an interactive wing directory system that allows users to explore room listings within each building and view detailed room information for all three wings. The application includes a floating AI chatbot access button for user assistance and an admin dashboard for managing campus room information.