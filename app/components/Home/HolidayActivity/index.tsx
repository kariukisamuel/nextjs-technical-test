import SectionTitle from "../../Common/SectionTitle";
import ActivityCard from "./ActivityCard";
type title = {
  title: string;
};
const HolidayActivity = ({ title }: title) => {
  return (
    <section id="howitworks" className="w-full pt-20">
      <div className="w-5/6 lg:w-[70%] mx-auto">
        <div>
          <SectionTitle title={title} />
        </div>
        <div className="flex justify-between mt-10 flex-wrap">
          <ActivityCard
            width="31.5%"
            image="/images/activities/Sport.png"
            title="Sports and Activities"
          />
          <ActivityCard
            width="31.5%"
            image="/images/activities/Health.png"
            title="Wellness and Health"
          />
          <ActivityCard
            width="31.5%"
            image="/images/activities/Extreme.png"
            title="Extreme Sports and Expeditions"
          />
          <ActivityCard
            width="31.5%"
            image="/images/activities/Games.png"
            title="Games"
          />
          <ActivityCard
            width="40%"
            image="/images/activities/Culture.png"
            title="Culture and Education"
          />
          <ActivityCard
            width="31.5%"
            image="/images/activities/Enjoyment.png"
            title="Enjoyment and Relaxation"
          />
          <ActivityCard
            width="31.5%"
            image="/images/activities/Travelling.png"
            title="Travelling"
          />
        </div>
      </div>
    </section>
  );
};
export default HolidayActivity;
