document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("introduction-form");
    const currentBrowserEl = document.getElementById("current-browser");
    const currentTimestampEl = document.getElementById("current-timestamp");
    const currentIpEl = document.getElementById("current-ip");

    const lastBrowserEl = document.getElementById("last-browser");
    const lastTimestampEl = document.getElementById("last-timestamp");
    const lastIpEl = document.getElementById("last-ip");

    // Helper functions for cookies
    const setCookie = (name, value, days) => {
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
    };

    const getCookie = (name) => {
        const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
            const [key, val] = cookie.split("=");
            acc[key] = decodeURIComponent(val);
            return acc;
        }, {});
        return cookies[name];
    };

    const deleteCookie = (name) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    };

    // Function to retrieve current session data
    const getSessionData = async () => {
        const browser = `${navigator.userAgent}`;
        const timestamp = new Date().toLocaleString();

        // Mock IP address (since direct retrieval requires backend support)
        const ip = "192.168.1.1";

        return { browser, timestamp, ip };
    };

    // Function to update session display
    const updateSessionInfo = async () => {
        const currentSession = await getSessionData();
        currentBrowserEl.textContent = `Browser: ${currentSession.browser}`;
        currentTimestampEl.textContent = `Timestamp: ${currentSession.timestamp}`;
        currentIpEl.textContent = `IP Address: ${currentSession.ip}`;

        const lastBrowser = getCookie("lastBrowser");
        const lastTimestamp = getCookie("lastTimestamp");
        const lastIp = getCookie("lastIp");

        lastBrowserEl.textContent = lastBrowser ? `Browser: ${lastBrowser}` : "No previous session data.";
        lastTimestampEl.textContent = lastTimestamp ? `Timestamp: ${lastTimestamp}` : "No previous session data.";
        lastIpEl.textContent = lastIp ? `IP Address: ${lastIp}` : "No previous session data.";
    };

    // Save current session and form data to cookies
    const saveDataToCookies = async () => {
        const currentSession = await getSessionData();

        // Save session data to cookies
        setCookie("lastBrowser", currentSession.browser, 7);
        setCookie("lastTimestamp", currentSession.timestamp, 7);
        setCookie("lastIp", currentSession.ip, 7);

        // Save form data to cookies
        Array.from(form.elements).forEach((element) => {
            if (element.name) {
                setCookie(element.name, element.value, 7);
            }
        });
    };

    // Populate form with saved data
    const populateForm = () => {
        Array.from(form.elements).forEach((element) => {
            if (element.name && getCookie(element.name)) {
                element.value = getCookie(element.name);
            }
        });
    };

    // Event listeners
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        saveDataToCookies().then(() => {
            alert("Data saved successfully!");
            window.location.reload();
        });
    });

    document.getElementById("purge-cookies").addEventListener("click", () => {
        document.cookie.split(";").forEach((cookie) => {
            const name = cookie.split("=")[0].trim();
            deleteCookie(name);
        });
        alert("All cookies deleted!");
        window.location.reload();
    });

    // Initialize
    updateSessionInfo();
    populateForm();
});
