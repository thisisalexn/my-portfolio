
import ImageGallery from "../../basic/ImageGallery";
import DriveRightAppIcon from "./DriveRightAppIcon";

const images = [
    "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c0/7e/00/c07e00f9-7439-d8da-7974-b8f82df59c98/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/540x540bb.jpg",
    "/images/driveright/PreviewMainMenu.png",
    "/images/driveright/PreviewGarage.png",
    "/images/driveright/PreviewSpeedLimit.png",
    "/images/driveright/PreviewSpeedCamera.png",
    "/images/driveright/PreviewViolation.png",
    "/images/driveright/PreviewArcadeMode.png",
    "/images/driveright/PreviewMissions.png",
];

const DriveRight = () => {


    return (
        <>
            <div className="flex content-center flex-col w-3/4 min-w-96 p-4 space-y-4">
                <h2 className='text-2xl font-extrabold text-white'>Drive Right <DriveRightAppIcon /> </h2>


                <p className="text-white font-extralight">
                    Drive Right is a personal side project I have been passionately working on alongside my studies.
                    It is a mobile game designed to simulate a realistic experience on the German autobahn including adherence to traffic laws.
                </p>

                <ImageGallery images={images} />

                <div className="flex items-center justify-center w-3/4 p-4">
                    <a href="https://apps.apple.com/app/apple-store/id6621259791?pt=127122912&ct=portfolio&mt=8">
                        <img src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1725494400" />
                    </a>

                </div>


            </div>

        </>
    );
};

export default DriveRight;