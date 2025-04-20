<template>
    <div class="dashboard-container">
      <div class="dashboard-layout">
        <div class="sidebar">
          <div class="sidebar-inner">
            <img src="@/assets/logo/logo.png" alt="Logo" class="logo" />
            <div class="navigation">
              <button class="nav-button">Dashboard</button>
              <div class="nav-links">
                <a href="#" class="nav-link">Volunteers</a>
                <a href="#" class="nav-link">Coordinator Info</a>
              </div>
            </div>
          </div>
          <div class="sidebar-divider"></div>
        </div>
  
        <div class="dashboard-content">
          <div class="content-container">
            <div class="header">
              <div class="search-container">
                <img src="material-symbols:search-rounded.svg" alt="Search" class="search-icon" />
                <input type="text" placeholder="Search volunteers" class="search-input" />
              </div>
              <div class="header-icons">
                <img src="mi:filter.svg" alt="Filter" class="header-icon" />
                <img src="material-symbols:edit-outline.svg" alt="Edit" class="header-icon" />
                <div class="profile-image"></div>
              </div>
            </div>
  
            <div class="events-section">
              <div class="section-header">
                <h2 class="section-title">Upcoming Events</h2>
                <p class="section-subtitle">Next 6 Months</p>
              </div>
              <div class="events-list">
                <div class="event-card">
                  <div class="event-details">
                    <div class="event-date">
                      <p class="event-day">MON</p>
                      <p class="event-calendar-date">May 26</p>
                    </div>
                    <div class="event-divider"></div>
                    <div class="event-info">
                      <p class="event-title">Family Support Group</p>
                      <div class="event-meta">
                        <p class="event-time">12pm – 3pm</p>
                        <div class="event-divider"></div>
                        <p class="event-slots filled-slots">2/2 Filled Slots</p>
                      </div>
                    </div>
                  </div>
                  <div class="event-actions">
                    <button class="action-button filled-action">Manage Volunteers</button>
                    <img src="ri:more-fill.png" alt="More" class="action-icon" />
                  </div>
                </div>
                <a href="#" class="view-more-link">View 5 More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ManageVolunteers"
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: "Inter", -apple-system, Roboto, Helvetica, sans-serif;
  }
  
  .dashboard-container {
    background-color: white;
    padding-left: 22px;
    padding-right: 65px;
    overflow: hidden;
  }
  
  @media (max-width: 991px) {
    .dashboard-container {
      padding: 20px;
    }
  }
  
  .dashboard-layout {
    gap: 20px;
    display: flex;
  }
  
  @media (max-width: 991px) {
    .dashboard-layout {
      flex-direction: column;
      gap: 0;
    }
  }
  
  .sidebar {
    display: flex;
    flex-direction: column;
    width: 22%;
    background: "red" !important;
  }
  
  @media (max-width: 991px) {
    .sidebar {
      width: 100%;
    }
  }
  
  .sidebar-inner {
    margin-top: 55px;
    width: fit-content;
  }
  
  .logo {
    width: 233px;
    margin: 0 18px;
    object-fit: contain;
  }
  
  .navigation {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .nav-button {
    border-radius: 10px;
    background-color: #0053a0;
    margin-top: 46px;
    padding: 11px 26px;
    color: white;
    font-size: 24px;
    border: none;
    cursor: pointer;
  }
  
  .nav-links {
    margin-top: 41px;
    padding: 0 26px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #535353;
  }
  
  .nav-link {
    font-size: 24px;
    text-decoration: none;
    color: inherit;
    margin-top: 20px;
  }
  
  .sidebar-divider {
    background-color: #d9d9d9;
    width: 1px;
    height: 1226px;
  }
  
  .dashboard-content {
    width: 78%;
    margin-left: 20px;
  }
  
  @media (max-width: 991px) {
    .dashboard-content {
      width: 100%;
    }
  }
  
  .content-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 20px;
    flex-wrap: wrap;
    color: #535353;
  }
  
  .profile-image {
    width: 39px;
    height: 39px;
    border-radius: 20px;
    background-color: #0053a0;
  }
  
  .search-container {
    display: flex;
    align-items: center;
    border-radius: 20px;
    background-color: #f7f7f7;
    padding: 3px 11px;
    gap: 11px;
  }
  
  .search-input {
    background: transparent;
    border: none;
    font-size: 16px;
    color: #535353;
    outline: none;
  }
  
  .search-icon {
    width: 29px;
  }
  
  .header-icons {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  
  .header-icon {
    width: 28px;
  }
  
  .events-section {
    margin-top: 51px;
    width: 100%;
  }
  
  .section-title {
    font-size: 32px;
    font-weight: 700;
    color: #222;
  }
  
  .section-subtitle {
    font-size: 20px;
    color: #6b6767;
    margin-top: 13px;
  }
  
  .event-card {
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    border: 2px solid rgba(159, 159, 159, 0.31);
    padding: 0 22px 0 38px;
    align-items: center;
    min-height: 151px;
    margin-bottom: 17px;
  }
  
  .event-details {
    display: flex;
    gap: 38px;
    align-items: center;
  }
  
  .event-date {
    text-align: center;
    width: 66px;
  }
  
  .event-day {
    font-size: 20px;
    color: #8f8f8f;
  }
  
  .event-calendar-date {
    font-size: 32px;
    color: #222;
    font-weight: 700;
    margin-top: 10px;
  }
  
  .event-divider {
    width: 2px;
    height: 97px;
    background-color: #d9d9d9;
  }
  
  .event-info {
    width: 275px;
  }
  
  .event-title {
    font-size: 24px;
    color: #222;
    font-weight: 500;
  }
  
  .event-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 20px;
    margin-top: 10px;
    color: #6b6767;
  }
  
  .event-time {
    margin: 0;
  }
  
  .event-slots {
    color: #d32f2f;
  }
  
  .filled-slots {
    color: #2e7d32;
  }
  
  .event-actions {
    display: flex;
    gap: 25px;
    align-items: center;
  }
  
  .action-button {
    background-color: #0053a0;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
  }
  
  .filled-action {
    background-color: transparent;
    border: 1px solid #6b6767;
    color: #6b6767;
  }
  
  .action-icon {
    width: 24px;
  }
  
  .view-more-link {
    color: #535353;
    font-size: 16px;
    text-decoration: underline;
    align-self: flex-end;
    margin-top: 17px;
  }
  </style>