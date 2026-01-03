
document.addEventListener('DOMContentLoaded', () => {

    // --- DATA STORE ---
    const pageData = {
        home: {
            title: "Welcome to SF Clan",
            image: "https://www.therockmanexezone.com/gallery/albums/userpics/10002/normal_SF_BG_Logo.png", // Using the MMSF icon
            content: `
                <p>We are Star Force (SF) Clan, a fellowship of gamers dedicated to mastering the classics. Our name is a tribute to one of our favorite series, Mega Man Star Force, and reflects our philosophy: to connect with the games of the past and conquer them together.</p>
                <p>We believe that true skill is timeless. Here, we celebrate the golden age of gaming, from the fast-paced action of retro shooters to the strategic depth of classic RPGs. Whether you're a seasoned veteran or a newcomer to the classics, you'll find a home with us.</p>
            `
        },
        members: {
            title: "Clan Roster",
            image: "https://www.therockmanexezone.com/gallery/albums/userpics/10002/normal_SF_BG_Logo.png",
            content: `
                <h3>Leadership</h3>
                <div class="leadership-section">
                    <div class="member-card leader">
                        <h3>Cipher</h3>
                        <p>The founder and leader of SF Clan. Cipher's strategic mind and dedication to the classics are the bedrock of our community. He ensures the clan stays true to its roots.</p>
                        <span>Favorite Game: Mega Man Star Force 3</span>
                    </div>
                    <div class="member-card sub-leader">
                        <h3>black_falcon</h3>
                        <p>The clan's sub-leader and primary tactician. black_falcon excels at organizing team strategies and is always the first to dive into a new classic challenge.</p>
                        <span>Favorite Game: Valorant</span>
                    </div>
                </div>

                <h3>Members</h3>
                <div class="member-grid">
                    <div class="member-card">
                        <h3>☻ Smile ☺</h3>
                         <span>Favorite Game: Total War: WARHAMMER III</span>
                    </div>
                    
                </div>
            `
        },
        games: {
            title: "Our Arsenal",
            image: "https://rebootrepairmi.com/wp-content/uploads/2024/09/exp1.webp",
            content: `
                <p>We believe in variety, but these are the battlegrounds where you'll most often find us honing our skills. Our focus is on games that require precision, strategy, and teamwork.</p>
                <ul class="games-list">
                    <li><strong>Mega Man Star Force Series:</strong> The core of our identity. We are active in all three games, with a special focus on competitive PvP in MMSF2 and MMSF3.</li>
                    <li><strong>Other Classics:</strong> We frequently rotate in other legendary titles, including classic shooters, fighters, and RPGs from the SNES, PS1, and N64 eras.</li>
                </ul>
            `
        },
        news: {
            title: "Clan News & Updates",
            image: "https://e7.pngegg.com/pngimages/422/126/png-clipart-newspaper-computer-icons-symbol-news-icon-text-logo-thumbnail.png",
            content: `
                <div class="news-article">
                    <h3>Coming Soon</h3>
                    
                </div>
                
            `
        },
        join: {
            title: "Join Star Force",
            image: "https://www.clipartmax.com/png/middle/274-2746627_join-as-organization-hands-logo-png.png",
            content: `
                <p>Think you have what it takes to wear the SF tag? We are always on the lookout for skilled and dedicated players who share our passion for classic gaming. We are more than just a clan; we are a community.</p>
                
                <h3>What We Look For:</h3>
                <ul>
                    <li><strong>Passion for the Classics:</strong> You must have a genuine love for retro and classic games, not just a passing interest.</li>
                    <li><strong>Skill and Dedication:</strong> We don't expect you to be a world champion, but a drive to improve and master your chosen games is essential.</li>
                    <li><strong>Respect and Teamwork:</strong> We have a zero-tolerance policy for toxicity. Members must be respectful, mature, and willing to work as a team.</li>
                    <li><strong>Active Participation:</strong> We are looking for active members who will participate in clan events, discussions, and games.</li>
                </ul>

                <h3>How to Apply:</h3>
                <p>Our recruitment process is based on skill and personality. To be considered, you must challenge and play with our leadership or senior members.</p>
                <p>Reach out to <strong>Cipher</strong> or <strong>style_wish</strong> on our Discord server to schedule a tryout session. Good luck, candidate.</p>
                <a href="https://discord.gg/s3WZUNDsAq" class="apply-btn">Join our Discord Server</a>
            `
        }
    };

    // --- ELEMENT SELECTORS ---
    const contentArea = document.getElementById('content-area');
    const navLinks = document.querySelectorAll('.nav-link');
    const clockElement = document.getElementById('clock');
    const dateDayElement = document.getElementById('date-day');
    const backToTopBtn = document.getElementById('back-to-top-btn');

    // --- FUNCTIONS ---

    /**
     * Switches the content displayed in the main area.
     * @param {string} pageKey - The key corresponding to the data in pageData.
     */
    function switchContent(pageKey) {
        const data = pageData[pageKey];
        if (!data) return;

        contentArea.classList.add('fade-out');

        setTimeout(() => {
            const html = `
                <div class="content-wrapper">
                    <div class="content-image">
                        <img src="${data.image}" alt="${data.title}">
                    </div>
                    <div class="content-text">
                        <h2>${data.title}</h2>
                        ${data.content}
                    </div>
                </div>
            `;
            contentArea.innerHTML = html;
            contentArea.classList.remove('fade-out');
        }, 300);
    }

    /**
     * Updates the clock and date display.
     */
    function updateClock() {
        const now = new Date();
        const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        const timeString = now.toLocaleTimeString('en-US', timeOptions);
        const dateDayString = now.toLocaleDateString('en-US', dateOptions);

        clockElement.textContent = timeString;
        dateDayElement.textContent = dateDayString;
    }

    /**
     * Shows or hides the 'back to top' button based on scroll position.
     */
    function handleBackToTopButton() {
        if (window.scrollY > 200) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }

    /**
     * Smoothly scrolls the window to the top.
     */
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    /**
     * Initializes the application.
     */
    function initialize() {
        // Load the default page content ('home')
        switchContent('home');

        // Update the clock immediately and then every second
        updateClock();
        setInterval(updateClock, 1000);

        // Add event listeners for the back to top button
        window.addEventListener('scroll', handleBackToTopButton);
        backToTopBtn.addEventListener('click', scrollToTop);

        // Attempt to play audio on load
        playAudio();
    }

    // --- EVENT LISTENERS & INITIALIZATION ---

    // Set up navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const page = link.getAttribute('data-page');
            switchContent(page);
        });
    });

    // --- BACKGROUND MUSIC HANDLER ---
    const backgroundMusic = document.getElementById('bg-music');

    function playAudio() {
        if (backgroundMusic && backgroundMusic.paused) {
            backgroundMusic.play().catch(error => {
                console.log("Autoplay was blocked by the browser. A user interaction is required to play audio.");
                document.body.addEventListener('click', playAudio, { once: true });
            });
        }
    }

    // Initialize the page
    initialize();

});
