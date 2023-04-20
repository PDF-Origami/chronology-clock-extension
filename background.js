// Listen for new tabs
chrome.tabs.onCreated.addListener((tab) => {
  // Only redirect if this is a blank new tab (not opened by clicking a link)
  if (tab.pendingUrl === "chrome://newtab/" || tab.url === "chrome://newtab/") {
    // Show website
    chrome.tabs.update(tab.id, { url: "https://chronologyclock.com" });
  }
});
