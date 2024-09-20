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
          image="/images/activities/sports.jpg"
          title="Sports and Activities"
          backgroundPosition="bottom"
        />
        <ActivityCard
          width="sm"
          image="/images/activities/wellness.jpg"
          title="Wellness and Health"
          backgroundPosition="center"
        />
        <ActivityCard
          width="sm"
          image="/images/activities/river-rafting.jpg"
          title="Extreme Sports and Expeditions"
          backgroundPosition="top left"
        />
        <ActivityCard
          width="sm"
          image="/images/activities/safari.jpg"
          title="Safari"
          backgroundPosition="center"
        />
        <ActivityCard
          width="lg"
          image="/images/activities/culture.jpg"
          title="Culture and Education"
          backgroundPosition="center"
        />
        <ActivityCard
          width="lg"
          image="/images/activities/enjoy.jpg"
          title="Enjoyment and Relaxation"
          backgroundPosition="center"
        />
        <ActivityCard
          width="sm"
          image="/images/activities/travelling.jpg"
          title="Travelling"
          backgroundPosition="top"
        />
      </div>
    </AnchorSection>
  );
};
export default HolidayActivity;
