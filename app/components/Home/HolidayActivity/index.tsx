// Import the `ActivityCard` and `AnchorSection` components from their respective paths
import ActivityCard from "./ActivityCard";
//Import AnchorSection components from their respective paths
import AnchorSection from "../../Common/AnchorSection";


// Create a functional component named `HolidayActivity`
const HolidayActivity = () => {
  return (
    // Return the JSX structure for rendering the holiday activity section

      <AnchorSection
        id="discover-holiday-activity-ideas"
        title="Discover holiday activity ideas"
      >
        <div className="flex justify-between mt-10 flex-wrap">
          {/* Render multiple `ActivityCard` components with different images and titles */}
          <ActivityCard
            width="sm"
            image="/images/activities/Sport.png"
            title="Sports and Activities"
            backgroundPosition="bottom"
          />
          <ActivityCard
            width="sm"
            image="/images/activities/Health.png"
            title="Wellness and Health"
            backgroundPosition="center"
          />
          <ActivityCard
            width="sm"
            image="/images/activities/Extreme.png"
            title="Extreme Sports and Expeditions"
            backgroundPosition="center"
          />
          <ActivityCard
            width="sm"
            image="/images/activities/Games.png"
            title="Games"
            backgroundPosition="center"
          />
          <ActivityCard
            width="lg"
            image="/images/activities/Culture.png"
            title="Culture and Education"
            backgroundPosition="center"
          />
          <ActivityCard
            width="lg"
            image="/images/activities/Enjoyment.png"
            title="Enjoyment and Relaxation"
            backgroundPosition="center"
          />
          <ActivityCard
            width="sm"
            image="/images/activities/Travelling.png"
            title="Travelling"
            backgroundPosition="top"
          />
        </div>
      </AnchorSection>
  );
};
export default HolidayActivity;
