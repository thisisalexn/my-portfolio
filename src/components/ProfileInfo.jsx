
import { Accordion, Avatar, Button, Card, Dropdown, Popover } from "flowbite-react";
import { Children } from "react";

function ProfileInfo() {
    return (
        <>
            <div className="content-center flex-col  ">
                <Card className="bg-transparent content-center flex-col  items-center justify-center">
                    <Avatar img={'src/assets/IMG_5973.png'} rounded className="image" size="xl" />
                    <h1 className="text-5xl font-bold tracking-tight text-white">
                        Alexander Nuss
                    </h1>
                    <p className="text-2xl font-bold text-white flex">
                        Software Devolper
                    </p>
                    <p className="text-2xl text-white flex items-center space-x-4 ">
                        <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd" />
                        </svg>
                        Munich, DE
                    </p>

                    <div className="flex flex-row space-x-4" style={{ background: "transparent" }}>
                        <Button
                            className="group border-2 border-white text-white rounded-full p-2 hover:bg-white hover:border-orange-500 transition-all duration-300 flex items-center flex-shrink-0 flex-grow-0"
                            href="https://www.linkedin.com/in/alexander-n-8a574b23b/"
                            style={{ background: "transparent" }}
                            target="_blank"
                        >
                            <svg className="w-6 h-6 text-white group-hover:text-orange-500 group-hover:scale-110 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                            </svg>

                        </Button>
                        <Popover content={
                            <Button.Group>
                                <Button color="gray" href="public/cv_de.pdf" target="_blank">Deutsch</Button>
                                <Button color="gray">English</Button>
                            </Button.Group>
                        }>
                            <Button
                                className="group border-2 border-white text-white rounded-full p-2 hover:bg-white hover:border-orange-500 transition-all duration-300 flex items-center flex-shrink-0 flex-grow-0"

                                style={{ background: "transparent" }}
                                target="_blank"
                            >
                                <svg className="w-6 h-6 text-white group-hover:text-orange-500 group-hover:scale-110 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z" clip-rule="evenodd" />
                                    <path fill-rule="evenodd" d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clip-rule="evenodd" />
                                </svg>
                                <span className="align-baseline text-xl ml-2 leading-6 group-hover:text-orange-500 transition-all duration-300 flex-shrink-0">
                                    CV
                                </span>

                            </Button>
                        </Popover>
                        {/*
                        <Dropdown className=""
                            label={
                                <span className=" bg-orange-400 group bg-transparent border-2  text-white rounded-full hover:bg-white hover:border-orange-500 transition-all duration-300 flex items-center justify-center  custom-dropdown-label p-3"
                                    style={{ background: "transparent" }}>
                                    <svg className="w-6 h-6 text-white group-hover:text-orange-500 group-hover:scale-110 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z" clip-rule="evenodd" />
                                        <path fill-rule="evenodd" d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clip-rule="evenodd" />
                                    </svg>
                                    <span
                                        className="align-baseline text-xl ml-2 leading-6 group-hover:text-orange-500 transition-all duration-300 flex-shrink-0"

                                    >
                                        CV
                                    </span>
                                </span>}
                            arrowIcon={false}

                            style={{ background: "transparent" }}

                        >
                            <Dropdown.Item link="/cv_de.pdf">
                                Deutsch
                            </Dropdown.Item>
                            <Dropdown.Item>English</Dropdown.Item>
                        </Dropdown>
*/}

                    </div>

                </Card>
            </div>
        </>
    );
}

export default ProfileInfo

