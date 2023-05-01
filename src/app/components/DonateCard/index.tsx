import { Text } from "../Text";

type DonateCardProps = {
  description: string;
};

export function DonateCard({ description }: DonateCardProps) {
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex items-center w-full gap-6">
        <div>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9 20.7L12.6375 17.4375C12.3625 17.1625 12.025 17.025 11.625 17.025C11.225 17.025 10.875 17.175 10.575 17.475C10.3 17.75 10.1625 18.1 10.1625 18.525C10.1625 18.95 10.3 19.3 10.575 19.575L14.85 23.85C15.125 24.125 15.475 24.2625 15.9 24.2625C16.325 24.2625 16.675 24.125 16.95 23.85L25.4625 15.3375C25.7375 15.0625 25.875 14.725 25.875 14.325C25.875 13.925 25.725 13.575 25.425 13.275C25.15 13 24.8 12.8625 24.375 12.8625C23.95 12.8625 23.6 13 23.325 13.275L15.9 20.7ZM18 33C15.925 33 13.975 32.606 12.15 31.818C10.325 31.03 8.7375 29.9615 7.3875 28.6125C6.0375 27.2625 4.969 25.675 4.182 23.85C3.395 22.025 3.001 20.075 3 18C3 15.925 3.394 13.975 4.182 12.15C4.97 10.325 6.0385 8.7375 7.3875 7.3875C8.7375 6.0375 10.325 4.969 12.15 4.182C13.975 3.395 15.925 3.001 18 3C20.075 3 22.025 3.394 23.85 4.182C25.675 4.97 27.2625 6.0385 28.6125 7.3875C29.9625 8.7375 31.0315 10.325 31.8195 12.15C32.6075 13.975 33.001 15.925 33 18C33 20.075 32.606 22.025 31.818 23.85C31.03 25.675 29.9615 27.2625 28.6125 28.6125C27.2625 29.9625 25.675 31.0315 23.85 31.8195C22.025 32.6075 20.075 33.001 18 33Z"
              fill="#299900"
            />
          </svg>
        </div>

        <div className="flex flex-col items-start gap-3 lg:w-3/4">
          <Text size="paragraph" children={description} />
        </div>
      </div>
    </div>
  );
}