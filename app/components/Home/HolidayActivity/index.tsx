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
          image="/images/home/activities/sports.webp"
          fallBackImage="/images/home/activities/sports.jpg"
          title="Sports and Activities"
          backgroundPosition="bottom"
        />
        <ActivityCard
          width="sm"
          image="/images/home/activities/wellness.jpg"
          fallBackImage="/images/home/activities/wellness.png"
          title="Wellness and Health"
          backgroundPosition="center"
        />
        <ActivityCard
          width="sm"
          image="/images/home/activities/river-rafting.webp"
          fallBackImage="/images/home/activities/river-rafting.jpg"
          title="Extreme Sports and Expeditions"
          backgroundPosition="top left"
        />
        <ActivityCard
          width="sm"
          image="/images/home/activities/safari.webp"
          fallBackImage="/images/home/activities/safari.jpg"
          title="Safari"
          backgroundPosition="center"
        />
        <ActivityCard
          width="lg"
          image="/images/home/activities/culture.webp"
          fallBackImage="/images/home/activities/culture.jpg"
          title="Culture and Education"
          backgroundPosition="center"
        />
        <ActivityCard
          width="lg"
          image="/images/home/activities/enjoy.webp"
          fallBackImage="/images/home/activities/enjoy.jpg"
          title="Enjoyment and Relaxation"
          backgroundPosition="center"
        />
        <ActivityCard
          width="sm"
          image="/images/home/activities/travelling.webp"
          fallBackImage="/images/home/activities/travelling.jpg"
          title="Travelling"
          backgroundPosition="top"
        />
      </div>
    </AnchorSection>
  );
};
export default HolidayActivity;
