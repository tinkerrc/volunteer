import React from 'react';
import styles from './dashboard.module.css';

const Event = ({ date, day, title, time, slots, onClick }) => {
  return (
    <div className={styles.card1}>
      <div className={styles.frameGroup}>
        <div className={styles.monParent}>
          <div className={styles.upcomingEvents}>{day}</div>
          <b className={styles.may26}>
            <p className={styles.june}>{date.split(' ')[0]}</p>
            <p className={styles.june}>{date.split(' ')[1]}</p>
          </b>
        </div>
        <div className={styles.frameChild} />
        <div className={styles.familySupportGroupParent}>
          <div className={styles.familySupportGroup1}>{title}</div>
          <div className={styles.pm3pmParent}>
            <div className={styles.pm3pm}>{time}</div>
            <div className={styles.frameItem} />
            <div className={styles.filledSlots1}>{slots}</div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent2}>
        <div className={styles.manageVolunteersContainer} onClick={onClick}>
          <div className={styles.manageVolunteers}>Request Volunteers</div>
        </div>
        <img className={styles.rimoreFillIcon1} alt="" src="ri:more-fill.png" />
      </div>
    </div>
  );
};

const Dashboard = ({ goto }) => {
  return (
    <div className={styles.finalDash}>
      <div className={styles.finalDashChild} />
      <b className={styles.june6}>
        <p className={styles.june}>June</p>
        <p className={styles.june}>6</p>
      </b>
      <div className={styles.familySupportGroup}>Family Support Group</div>
      <div className={styles.unfilledSlots}>1 Unfilled Slot</div>
      <div className={styles.pm4pm}>2pm – 4pm</div>
      <div className={styles.fri}>Fri.</div>
      <div className={styles.finalDashItem} />
      <div className={styles.finalDashInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.requestVolunteer}>Request Volunteer</div>
      <div className={styles.required}>2 Required</div>
      <img className={styles.rimoreFillIcon} alt="" src="ri:more-fill.png" />
      <div className={styles.finalDashChild1} />
      <img className={styles.icroundAddIcon} alt="" src="ic:round-add.svg" />
      <img className={styles.materialSymbolseditOutlineIcon} alt="" src="material-symbols:edit-outline.svg" />
      <img className={styles.mifilterIcon} alt="" src="mi:filter.svg" />

      <div className={styles.frameParent}>
        <div className={styles.upcomingEventsParent}>
          <b className={styles.upcomingEvents}>Upcoming Events</b>
          <div className={styles.next6Months}>Next 6 Months</div>
        </div>
        <div className={styles.card}>
          <div className={styles.frameGroup}>
            <div className={styles.monParent}>
              <div className={styles.upcomingEvents}>MON</div>
              <b className={styles.may26}>
                <p className={styles.june}>May</p>
                <p className={styles.june}>26</p>
              </b>
            </div>
            <div className={styles.frameChild} />
            <div className={styles.familySupportGroupParent}>
              <div className={styles.familySupportGroup1}>Family Support Group</div>
              <div className={styles.pm3pmParent}>
                <div className={styles.pm3pm}>12pm – 3pm</div>
                <div className={styles.frameItem} />
                <div className={styles.filledSlots}>2/2 Filled Slots</div>
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.manageVolunteersWrapper}>
              <div className={styles.manageVolunteers}>Manage Volunteers</div>
            </div>
            <img className={styles.rimoreFillIcon1} alt="" src="ri:more-fill.png" />
          </div>
        </div>
      </div>

      <div className={styles.frameDiv}>
        <div className={styles.unfilledEventsParent}>
          <b className={styles.upcomingEvents}>Unfilled Events</b>
          <div className={styles.next6Months}>Next 6 Months</div>
        </div>
        <div className={styles.cardParent}>
          <Event day="TUES" date="May 13" title="Peer Support Group" time="2pm – 3pm" slots="1/2 Filled Slots" onClick={() => goto("vol")} />
          <Event day="MON" date="May 19" title="Peer Support Group" time="12pm – 2pm" slots="0/2 Filled Slots" />
        </div>
      </div>

      <div className={styles.finalDashChild2} />
      <div className={styles.searchEvent}>Search Event</div>
      <div className={styles.view5More}>View 5 More</div>
      <img className={styles.materialSymbolssearchRoundeIcon} alt="" src="material-symbols:search-rounded.svg" />
      <img className={styles.image7Icon} alt="" src="image 7.png" />
      <div className={styles.navDash}>
        <div className={styles.navDashChild} />
        <div className={styles.dashboard} onClick={() => goto("home")}>Dashboard</div>
        <div className={styles.volunteers} onClick={() => goto("vol")}>Volunteers</div>
        <div className={styles.coordinatorInfo} onClick={() => goto("login")}>Coordinator Info</div>
      </div>
    </div>
  );
};

export default Dashboard;
