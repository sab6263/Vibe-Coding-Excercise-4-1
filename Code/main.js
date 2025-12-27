// State Management
const state = {
    currentScreen: 'mobility',
    subScreen: null, // null, 'route-planning', 'navigation'
    user: {
        name: 'Alex Rivera',
        id: '9283-0219-SX',
        ecoScore: 1240,
        ecoGoal: 2000,
        co2Saved: 14.2
    },
    selectedDestination: null
};

// Screen Templates
const screens = {
    mobility: () => `
        <div class="screen mobility-screen">
            <header class="header-section">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
                    <img src="C:/Users/bauma/.gemini/antigravity/brain/d9b3ab10-a1f7-4ecd-9045-8d79d8c14f86/uploaded_image_1766840675727.png" style="width: 32px; border-radius: 4px;" alt="THI Logo">
                    <div>
                        <h4 style="font-family: 'Outfit'; font-weight: 700; font-size: 14px; letter-spacing: 0.5px;">THI CAMPUS</h4>
                        <p style="font-size: 10px; color: var(--text-muted); font-weight: 700;">MOBILITY PORTAL</p>
                    </div>
                </div>
                <h1 class="title-large">Where do you want to go?</h1>
                <div class="search-bar">
                    <i data-lucide="search"></i>
                    <input type="text" placeholder="Search buildings or classes..." />
                </div>
            </header>

            <div class="filter-bar">
                <div class="filter-chip active">Eco</div>
                <div class="filter-chip">Accessible</div>
                <div class="filter-chip">Quiet</div>
                <div class="filter-chip">Fastest</div>
            </div>

            <div class="map-canvas" style="background: url('C:/Users/bauma/.gemini/antigravity/brain/d9b3ab10-a1f7-4ecd-9045-8d79d8c14f86/campus_map_texture_1766840033770.png'); background-size: cover; background-position: center;">
                <div class="map-placeholder" style="background: rgba(255, 255, 255, 0.4); backdrop-filter: blur(2px);">
                    <!-- Simulated building markers -->
                    <div style="position: absolute; top: 30%; left: 35%; background: var(--primary); color: white; padding: 4px 8px; border-radius: 8px; font-size: 10px; font-weight: bold; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
                        LIBRARY
                    </div>
                     <div style="position: absolute; top: 65%; left: 60%; background: var(--primary); color: white; padding: 4px 8px; border-radius: 8px; font-size: 10px; font-weight: bold; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
                        STUDENT HUB
                    </div>
                    <div style="position: absolute; top: 15%; left: 15%; background: var(--primary); color: white; padding: 4px 8px; border-radius: 8px; font-size: 10px; font-weight: bold; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
                        SCIENCE & TECH
                    </div>
                    <!-- Designated Purple Zones -->
                    <div style="position: absolute; top: 45%; left: 25%; width: 40px; height: 40px; background: rgba(168, 85, 247, 0.4); border: 2px dashed #A855F7; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                        <i data-lucide="parking-circle" style="color: #A855F7; width: 16px;"></i>
                    </div>
                    <div style="position: absolute; top: 60%; left: 45%; width: 30px; height: 30px; background: rgba(168, 85, 247, 0.4); border: 2px dashed #A855F7; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                        <i data-lucide="parking-circle" style="color: #A855F7; width: 14px;"></i>
                    </div>
                    <i data-lucide="navigation" style="position: absolute; top: 45%; left: 45%; color: var(--accent-blue); fill: var(--accent-blue); opacity: 0.9; width: 24px;"></i>
                </div>
            </div>

            <section class="next-class">
                <div class="card" style="border-left: 4px solid var(--accent-blue);" onclick="navigateToSub('route-planning', 'Chemistry Lab')">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                        <div>
                            <span class="pill pill-blue"><i data-lucide="clock" style="width: 12px;"></i> STARTS IN 18 MIN</span>
                            <h3 style="margin-top: 8px;">Chemistry Lab (Bldg C)</h3>
                            <p class="subtitle">Room 402 • 400m away</p>
                        </div>
                        <button class="nav-btn" style="background: var(--bg-light); border: none; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--primary); cursor: pointer;">
                            <i data-lucide="arrow-up-right"></i>
                        </button>
                    </div>
                </div>
            </section>

            <section class="quick-destinations">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                    <div class="card" style="margin-bottom: 0; padding: 16px;">
                        <i data-lucide="library" style="margin-bottom: 8px; color: var(--secondary);"></i>
                        <h4 style="font-size: 14px;">Library</h4>
                    </div>
                    <div class="card" style="margin-bottom: 0; padding: 16px;">
                        <i data-lucide="coffee" style="margin-bottom: 8px; color: var(--secondary);"></i>
                        <h4 style="font-size: 14px;">Cafeteria</h4>
                    </div>
                </div>
            </section>

            <section class="nearby-rentals" style="margin-top: 24px;">
                <h4 class="settings-label">Nearby Shared Mobility</h4>
                <div class="card" style="display: flex; align-items: center; justify-content: space-between;">
                   <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="background: #F1F5F9; padding: 10px; border-radius: 12px;">
                             <i data-lucide="bike" style="color: var(--primary);"></i>
                        </div>
                        <div>
                            <h4 style="font-size: 15px;">E-Scooter #48</h4>
                            <p style="font-size: 12px; color: var(--text-muted);">88% Battery • 2m walk</p>
                        </div>
                   </div>
                   <button style="background: var(--primary); color: white; border: none; padding: 8px 16px; border-radius: 12px; font-weight: 600; font-size: 12px;">UNLOCK</button>
                </div>
            </section>
        </div>
    `,
    community: () => `
        <div class="screen community-screen">
            <header class="header-section" style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h1 class="title-large">Community</h1>
                    <p class="subtitle">Shared Campus Mobility</p>
                </div>
                <button style="background: var(--primary); color: white; border: none; padding: 10px 16px; border-radius: 12px; font-weight: 600; font-size: 13px;">CREATE RIDE</button>
            </header>

            <h4 class="settings-label">Active Match Suggestions</h4>
            
            ${[
            { name: 'Sarah L.', time: '5m', dest: 'Bldg C Science', reliability: '4.9', seats: 2 },
            { name: 'James W.', time: '10m', dest: 'Bldg C Science', reliability: '4.8', seats: 2 },
            { name: 'Taylor M.', time: '15m', dest: 'Bldg B Main', reliability: '4.7', seats: 1 }
        ].map(match => `
                <div class="card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <div class="avatar" style="margin-left: 0; background: #EBF3FF; color: var(--accent-blue);">${match.name[0]}</div>
                            <div>
                                <h4 style="font-size: 16px;">${match.name}</h4>
                                <p style="font-size: 12px; color: var(--text-muted);">Reliability: ${match.reliability} ⭐</p>
                            </div>
                        </div>
                        <span style="font-weight: 700; color: var(--accent-blue); font-size: 13px;">LEAVES IN ${match.time.toUpperCase()}</span>
                    </div>
                    <div style="background: #F8FAFC; padding: 12px; border-radius: 12px; margin-bottom: 16px;">
                        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                            <i data-lucide="map-pin" style="width: 14px; color: var(--primary);"></i>
                            <span style="font-size: 13px; font-weight: 600;">Destination: ${match.dest}</span>
                        </div>
                        <div style="display: flex; gap: 8px;">
                            <span class="pill" style="background: white; border: 1px solid #E2E8F0;">Same Schedule</span>
                            <span class="pill" style="background: white; border: 1px solid #E2E8F0;">${match.seats} Seats</span>
                        </div>
                    </div>
                    <button class="btn-primary" style="padding: 12px;">JOIN RIDE MATCH</button>
                </div>
            `).join('')}
        </div>
    `,
    wallet: () => `
        <div class="screen wallet-screen">
             <header class="header-section">
                <h1 class="title-large">Eco-Score</h1>
                <p class="subtitle">Your sustainability impact</p>
            </header>

            <div class="card" style="text-align: center; padding: 30px;">
                <div class="eco-circle-container">
                    <div class="eco-progress">
                        <svg viewBox="0 0 100 100" width="200" height="200">
                            <circle class="bg" cx="50" cy="50" r="45"></circle>
                            <circle class="bar" cx="50" cy="50" r="45" 
                                style="stroke-dasharray: 283; stroke-dashoffset: ${283 - (283 * (state.user.ecoScore / state.user.ecoGoal))};">
                            </circle>
                        </svg>
                        <div class="eco-value">
                            <span class="eco-number">${state.user.ecoScore.toLocaleString()}</span>
                            <span class="eco-label">Total Points</span>
                        </div>
                    </div>
                </div>
                <div style="background: var(--primary); color: white; display: inline-block; padding: 8px 16px; border-radius: 12px; font-size: 12px; font-weight: 700; letter-spacing: 1px; margin-top: -20px;">
                    TOP 5% STUDENT
                </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                <div class="card" style="margin-bottom: 0; text-align: center;">
                    <p class="subtitle" style="font-weight: 600;">CO₂ SAVED</p>
                    <h2 style="font-size: 24px; color: var(--accent-green); margin-top: 4px;">${state.user.co2Saved} kg</h2>
                </div>
                <div class="card" style="margin-bottom: 0; text-align: center;">
                    <p class="subtitle" style="font-weight: 600;">WEEKLY RANK</p>
                    <h2 style="font-size: 24px; color: var(--primary); margin-top: 4px;">#124</h2>
                </div>
            </div>

            <h4 class="settings-label">Rewards Progress</h4>
            <div class="card">
                ${[
            { name: 'Café Voucher', current: 420, target: 500 },
            { name: 'Mobility Pass', current: 1240, target: 2000 },
            { name: 'Campus Gear', current: 1240, target: 3500 }
        ].map(reward => `
                    <div style="margin-bottom: 20px; cursor: pointer;" onclick="navigateToSub('reward-detail', '${reward.name}')">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <span style="font-weight: 600; font-size: 14px;">${reward.name}</span>
                            <span style="font-size: 12px; color: var(--text-muted);">${reward.current} / ${reward.target} pts</span>
                        </div>
                        <div style="height: 8px; background: #F1F5F9; border-radius: 10px; overflow: hidden;">
                            <div style="width: ${(reward.current / reward.target) * 100}%; height: 100%; background: var(--primary); border-radius: 10px;"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    'reward-detail': () => `
        <div class="screen reward-detail">
            <header class="header-section" style="display: flex; align-items: center; gap: 16px;">
                <button onclick="backToMain()" style="border: none; background: none; color: var(--primary); cursor: pointer;"><i data-lucide="arrow-left"></i></button>
                <h2 style="font-size: 20px;">Reward Detail</h2>
            </header>

            <div class="card" style="text-align: center; padding: 40px 20px;">
                <div style="background: #EBF3FF; width: 80px; height: 80px; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; color: var(--primary);">
                    <i data-lucide="award" style="width: 40px; height: 40px;"></i>
                </div>
                <h3 style="font-size: 24px; margin-bottom: 8px;">${state.selectedDestination || 'Reward Item'}</h3>
                <p class="subtitle" style="margin-bottom: 24px;">Valid at all campus locations and partner stores.</p>
                
                <div style="background: #F1F5F9; padding: 16px; border-radius: 16px; margin-bottom: 24px;">
                    <p style="font-size: 12px; font-weight: 700; color: var(--text-muted); margin-bottom: 4px;">POINTS NEEDED</p>
                    <p style="font-size: 20px; font-weight: 800; color: var(--primary);">500 PTS</p>
                </div>

                <button class="btn-primary" disabled style="opacity: 0.5;">REDEEM NOW</button>
                <p style="font-size: 11px; color: var(--text-muted); margin-top: 12px;">You need 80 more points to unlock this reward.</p>
            </div>

            <h4 class="settings-label">About this reward</h4>
            <div class="card" style="border: none; background: none; padding: 0;">
                <p style="font-size: 14px; line-height: 1.6; color: var(--text-muted);">
                    Get a free medium coffee or tea at any campus cafeteria. This reward can be claimed once per week and is non-transferable.
                </p>
            </div>
        </div>
    `,
    profile: () => `
        <div class="screen profile-screen">
            <header class="profile-header">
                    <div class="profile-img">
                        <i data-lucide="user" style="width: 40px; height: 40px;"></i>
                    </div>
                    <div>
                        <h1 style="font-size: 20px;">${state.user.name}</h1>
                        <p class="subtitle">ID: ${state.user.id}</p>
                        <span class="pill pill-blue" style="margin-top: 8px;">3rd YEAR</span>
                    </div>
                    <img src="C:/Users/bauma/.gemini/antigravity/brain/d9b3ab10-a1f7-4ecd-9045-8d79d8c14f86/uploaded_image_1766840675727.png" style="width: 40px; margin-left: auto; border-radius: 4px; opacity: 0.8;" alt="THI Logo">
                </header>

            <div class="settings-group">
                <h4 class="settings-label">Account</h4>
                <div class="card">
                    <div class="setting-item">
                        <div class="setting-info">
                            <h4>Sync Calendar</h4>
                            <p>For lecture-aware planning</p>
                        </div>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider"></span>
                        </label>
                    </div>
                    <div class="setting-item" style="border-bottom: none;" onclick="navigateToSub('mobility-pass')">
                        <div class="setting-info">
                            <h4>Pass Status</h4>
                            <p>Semester Mobility Pass</p>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                             <span class="pill pill-green">ACTIVE</span>
                             <i data-lucide="chevron-right" style="width: 16px; color: var(--text-muted);"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div class="settings-group">
                <h4 class="settings-label">Preferences</h4>
                <div class="card">
                    <div class="setting-item">
                        <div class="setting-info">
                            <h4>Walking Pace</h4>
                            <p>Current: 5.2 km/h</p>
                        </div>
                        <i data-lucide="chevron-right" style="width: 18px; color: var(--text-muted);"></i>
                    </div>
                    <div class="setting-item">
                        <div class="setting-info">
                            <h4>Quiet Zones</h4>
                            <p>Avoid major hallways</p>
                        </div>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider"></span>
                        </label>
                    </div>
                    <div class="setting-item" style="border-bottom: none;">
                        <div class="setting-info">
                            <h4>Accessibility</h4>
                            <p>Ramps & elevators only</p>
                        </div>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider"></span>
                        </label>
                    </div>
                </div>
            </div>

            <button class="btn-primary" style="background: #FEE2E2; color: #EF4444; border: 1px solid #FECACA;">SIGN OUT</button>
            
            <div style="text-align: center; margin-top: 30px; padding-bottom: 20px;">
                <p style="font-size: 12px; color: var(--text-muted); opacity: 0.5;">THI Mobility App Prototype v1.0</p>
            </div>
        </div>
    `,
    'route-planning': () => `
        <div class="screen route-planning">
             <header class="header-section" style="display: flex; align-items: center; gap: 16px;">
                <button onclick="backToMain()" style="border: none; background: none; color: var(--primary); cursor: pointer;"><i data-lucide="arrow-left"></i></button>
                <div>
                     <p class="subtitle" style="text-transform: uppercase; font-size: 10px; font-weight: 700; letter-spacing: 1px;">Destination</p>
                     <h2 style="font-size: 20px;">${state.selectedDestination || 'Select Destination'}</h2>
                </div>
            </header>

            <div class="card" style="padding: 12px; display: flex; gap: 12px; margin-bottom: 24px; background: #F1F5F9; border: none;">
                 <div style="flex: 1; text-align: center;">
                    <p style="font-size: 10px; font-weight: 700; color: var(--text-muted);">ETA</p>
                    <p style="font-size: 16px; font-weight: 700; color: var(--primary);">4 MIN</p>
                 </div>
                 <div style="width: 1px; background: #E2E8F0;"></div>
                 <div style="flex: 1; text-align: center;">
                    <p style="font-size: 10px; font-weight: 700; color: var(--text-muted);">WALKING</p>
                    <p style="font-size: 16px; font-weight: 700; color: var(--primary);">280m</p>
                 </div>
                 <div style="width: 1px; background: #E2E8F0;"></div>
                 <div style="flex: 1; text-align: center;">
                    <p style="font-size: 10px; font-weight: 700; color: var(--text-muted);">CO₂ IMPACT</p>
                    <p style="font-size: 16px; font-weight: 700; color: var(--accent-green);">0g</p>
                 </div>
            </div>

            <h4 class="settings-label">Route Options</h4>
            
            <div class="card" style="border: 2px solid var(--accent-green);">
                <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                    <span class="pill pill-green">RECOMMENDED • ECO</span>
                    <span style="font-weight: 700; color: var(--primary);">4 MIN</span>
                </div>
                <div style="display: flex; gap: 12px; align-items: center;">
                    <div style="background: #E1F9F0; padding: 10px; border-radius: 12px; color: var(--accent-green);">
                         <i data-lucide="footprints"></i>
                    </div>
                    <div>
                        <h4 style="font-size: 15px;">Smart Walkpath</h4>
                        <p style="font-size: 12px; color: var(--text-muted);">Quiet halls • Direct route</p>
                    </div>
                </div>
                <button class="btn-primary" style="margin-top: 16px;" onclick="navigateToSub('navigation')">START NAVIGATION</button>
            </div>

            <div class="card">
                <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                    <span class="pill pill-blue">FASTEST</span>
                    <span style="font-weight: 700; color: var(--primary);">2 MIN</span>
                </div>
                <div style="display: flex; gap: 12px; align-items: center;">
                    <div style="background: #EBF3FF; padding: 10px; border-radius: 12px; color: var(--accent-blue);">
                         <i data-lucide="bike"></i>
                    </div>
                    <div>
                        <h4 style="font-size: 15px;">E-Scooter #48</h4>
                        <p style="font-size: 12px; color: var(--text-muted);">Available 20m away</p>
                    </div>
                </div>
            </div>

            <div class="settings-group">
                <h4 class="settings-label">Social Options</h4>
                 <div class="card" style="display: flex; align-items: center; justify-content: space-between; border: 1px dashed var(--accent-blue);">
                   <div style="display: flex; align-items: center; gap: 12px;">
                        <i data-lucide="users" style="color: var(--accent-blue);"></i>
                        <div>
                            <h4 style="font-size: 14px;">Ride-Share Buddy Match</h4>
                            <p style="font-size: 11px; color: var(--text-muted);">Taylor M. is going same way</p>
                        </div>
                   </div>
                   <button style="background: var(--accent-blue); color: white; border: none; padding: 6px 12px; border-radius: 8px; font-weight: 600; font-size: 11px;">MATCH</button>
                </div>
            </div>
        </div>
    `,
    navigation: () => `
        <div class="screen navigation-screen" style="padding: 0; display: flex; flex-direction: column; height: 100%;">
            <div class="map-canvas" style="flex: 1; border-radius: 0; margin-bottom: 0; background: url('C:/Users/bauma/.gemini/antigravity/brain/d9b3ab10-a1f7-4ecd-9045-8d79d8c14f86/campus_map_texture_1766840033770.png'); background-size: cover; background-position: center;">
                <div class="map-placeholder" style="background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(2px);">
                     <!-- Simulated navigation path -->
                     <svg width="100%" height="100%" style="position: absolute;">
                        <path d="M 200 450 L 200 300 L 100 300 L 100 100" fill="none" stroke="var(--primary)" stroke-width="8" stroke-linecap="round" stroke-dasharray="12 12" />
                        <circle cx="100" cy="100" r="10" fill="var(--accent-green)" />
                     </svg>
                     <div style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); background: white; padding: 8px 16px; border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.2); display: flex; gap: 8px; align-items: center; border: 1px solid #E2E8F0;">
                        <div style="width: 10px; height: 10px; background: var(--accent-blue); border-radius: 50%; box-shadow: 0 0 10px var(--accent-blue);"></div>
                        <span style="font-size: 12px; font-weight: 800; color: var(--primary);">LIVE LOCATION</span>
                     </div>
                </div>
                
                <div style="position: absolute; top: 20px; left: 20px; right: 20px;">
                    <div class="card" style="background: var(--primary); color: white; display: flex; gap: 16px; align-items: center;">
                        <div style="background: rgba(255,255,255,0.2); padding: 12px; border-radius: 12px;">
                            <i data-lucide="corner-up-right" style="width: 32px; height: 32px;"></i>
                        </div>
                        <div>
                            <p style="font-size: 12px; opacity: 0.8; font-weight: 600;">NEXT DIRECTION</p>
                            <h3 style="font-size: 18px;">Turn Right after Bldg A</h3>
                            <p style="font-size: 14px; opacity: 0.8;">In 120 meters</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card" style="border-radius: 30px 30px 0 0; margin-bottom: 0; padding: 24px; box-shadow: 0 -10px 30px rgba(0,0,0,0.1);">
                 <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <div>
                        <h2 style="font-size: 24px;">4 min</h2>
                        <p class="subtitle">Arriving at 10:42 AM • 280m</p>
                    </div>
                    <div style="display: flex; gap: 12px;">
                         <button style="width: 50px; height: 50px; border-radius: 50%; border: 1px solid #E2E8F0; background: white; display: flex; align-items: center; justify-content: center; color: var(--text-muted);">
                            <i data-lucide="alert-triangle"></i>
                         </button>
                         <button onclick="backToMain()" style="width: 50px; height: 50px; border-radius: 50%; border: none; background: #FEE2E2; color: #EF4444; display: flex; align-items: center; justify-content: center;">
                            <i data-lucide="x"></i>
                         </button>
                    </div>
                 </div>
                 
                 <div style="background: #F8FAFC; padding: 12px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                    <span class="pill pill-green" style="font-size: 10px;">AUTO-REROUTE ACTIVE</span>
                    <p style="font-size: 12px; color: var(--text-muted);">Avoiding wet floor in Corridor 2</p>
                 </div>
            </div>
        </div>
    `,
    'mobility-pass': () => `
        <div class="screen pass-detail">
            <header class="header-section" style="display: flex; align-items: center; gap: 16px;">
                <button onclick="backToMain()" style="border: none; background: none; color: var(--primary); cursor: pointer;"><i data-lucide="arrow-left"></i></button>
                <h2 style="font-size: 20px;">Mobility Pass</h2>
            </header>

            <div class="card" style="background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%); color: white;">
                 <div style="display: flex; justify-content: space-between; margin-bottom: 40px;">
                    <div>
                        <p style="font-size: 10px; opacity: 0.7; font-weight: 700; letter-spacing: 1px;">SEMESTER TICKET</p>
                        <h3 style="font-size: 22px;">Winter 2025/26</h3>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 8px;">
                        <img src="C:/Users/bauma/.gemini/antigravity/brain/d9b3ab10-a1f7-4ecd-9045-8d79d8c14f86/uploaded_image_1766840675727.png" style="width: 24px; border-radius: 4px; filter: brightness(0) invert(1);" alt="THI Logo">
                        <div style="background: white; padding: 6px; border-radius: 8px; color: var(--primary);">
                            <i data-lucide="qr-code" style="width: 20px; height: 20px;"></i>
                        </div>
                    </div>
                 </div>
                 <div style="display: flex; justify-content: space-between; align-items: flex-end;">
                    <div>
                        <p style="font-size: 10px; opacity: 0.7; font-weight: 700;">HOLDER</p>
                        <p style="font-size: 16px; font-weight: 600;">ALEX RIVERA</p>
                    </div>
                    <div style="text-align: right;">
                         <p style="font-size: 10px; opacity: 0.7; font-weight: 700;">EXPIRES</p>
                         <p style="font-size: 14px; font-weight: 600;">31 MAR 2026</p>
                    </div>
                 </div>
            </div>

            <div class="settings-group">
                <h4 class="settings-label">Plan Details</h4>
                <div class="card">
                     <div class="setting-item">
                        <div class="setting-info">
                            <h4>Subscription Type</h4>
                            <p>Premium Student Mobility Pass</p>
                        </div>
                        <span class="pill pill-blue">PREMIUM</span>
                    </div>
                    <div class="setting-item" style="border-bottom: none;">
                        <div class="setting-info">
                            <h4>Included Network</h4>
                            <p>All VGI regions, Campus Shuttles, Tier E-scooters (30 min/day)</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="settings-group">
                <h4 class="settings-label">Manage Subscription</h4>
                <div class="card">
                    <div class="setting-item">
                        <div class="setting-info">
                            <h4>Auto-Renewal</h4>
                            <p>Enabled for Summer 2026</p>
                        </div>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider"></span>
                        </label>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 16px;">
                        <button class="btn-primary" style="padding: 10px; font-size: 12px; background: #EEF2FF; color: var(--primary); border: 1px solid #E0E7FF;">PAUSE PASS</button>
                        <button class="btn-primary" style="padding: 10px; font-size: 12px; border: 1px solid var(--primary);">RENEW NOW</button>
                    </div>
                    <button style="width: 100%; margin-top: 12px; padding: 10px; border: none; background: none; color: #EF4444; font-size: 12px; font-weight: 600; cursor: pointer;">CANCEL SUBSCRIPTION</button>
                </div>
            </div>

            <div class="card" style="background: #F8FAFC; border: none; padding: 20px;">
                 <h4 style="font-size: 15px; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                    <i data-lucide="info" style="width: 18px; color: var(--primary);"></i>
                    Campus Rules
                 </h4>
                 <ul style="font-size: 12px; color: var(--text-muted); padding-left: 18px; line-height: 1.8;">
                    <li>Scooters must be parked in designated purple zones on the map.</li>
                    <li>Always wear a helmet provided with the vehicle.</li>
                    <li>The pass is strictly personalized and requires student ID for verification.</li>
                    <li>Yield to pedestrians in all shared space areas.</li>
                 </ul>
            </div>
        </div>
    `
};

// Render Logic
function render() {
    const root = document.getElementById('content');
    const screenKey = state.subScreen || state.currentScreen;
    root.innerHTML = screens[screenKey]();

    // Re-initialize Lucide icons
    lucide.createIcons();

    // Update nav buttons
    document.querySelectorAll('.nav-item').forEach(btn => {
        if (btn.dataset.screen === state.currentScreen) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }

        // Hide nav on sub-screens like navigation
        const nav = document.querySelector('.bottom-nav');
        if (state.subScreen === 'navigation') {
            nav.style.transform = 'translateY(100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
    });

    // Reset scroll
    root.scrollTop = 0;
}

// Navigation Functions
function navigateToSub(screenId, destination) {
    state.subScreen = screenId;
    if (destination) state.selectedDestination = destination;
    render();
}

function backToMain() {
    state.subScreen = null;
    render();
}

// Navigation Listeners
document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
        const screenId = btn.dataset.screen;
        if (state.currentScreen !== screenId || state.subScreen) {
            state.currentScreen = screenId;
            state.subScreen = null;
            render();
        }
    });
});

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    render();
});
