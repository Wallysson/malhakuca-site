import { Text } from "../Text";

type AchievementsCardProps = {
  title: string;
};

export function AchievementsCard({ title }: AchievementsCardProps) {
  return (
    <div className="flex flex-col w-full gap-9">
      <div className="flex items-center w-full gap-8">
        <div>
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.6801 3.9375V0.375H6.3125V3.9375H0.375V6.75781C0.375 9.13281 1.08008 11.418 2.36109 13.1859C3.35043 14.5515 4.89715 15.4941 6.28801 15.9476C6.69176 18.1214 7.78723 20.1877 10.013 21.8725C11.6459 23.1089 13.6089 24.0152 15.3672 24.3855V30.3594H9.875V33.625H24.125V30.3594H18.6328V24.3855C20.3911 24.0144 22.3534 23.1089 23.987 21.8725C26.2135 20.1877 27.3082 18.1214 27.712 15.9476C29.1028 15.4941 30.6496 14.5515 31.6389 13.1859C32.9199 11.418 33.625 9.13281 33.625 6.75781V3.9375H27.6801ZM5.00625 11.2703C4.21359 10.1808 3.73191 8.71719 3.6525 7.20312H6.3125V12.2032C6.02008 12.1186 5.35359 11.749 5.00625 11.2703ZM28.9937 11.2703C28.6523 11.7609 28.1328 12.204 27.6875 12.204C27.6875 10.5415 27.6875 8.7684 27.6838 7.20312H30.3482C30.2681 8.71719 29.7656 10.1645 28.9937 11.2703Z"
              fill="#FFEB33"
            />
          </svg>
        </div>

        <div className="flex flex-col items-start gap-3 lg:w-3/4">
          <Text size="titleRelevant" variant="neutral">
            {title}
          </Text>
        </div>
      </div>
    </div>
  );
}
