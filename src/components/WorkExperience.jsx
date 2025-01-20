import { Timeline } from "flowbite-react";



const WorkExperience = () => {
    return (
        <>
            <div className="content-center flex-col w-96 p-4 ">
                <h2 className='text-3xl font-extrabold text-white'>Work Experience</h2>
            </div>
            <div className="content-center flex-col w-3/4 p-4 min-w-96">
                <Timeline>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time>
                                11/2024 - Today
                            </Timeline.Time>
                            <Timeline.Title className="text-white  ">
                                Working Student
                                <Timeline.Title className="text-white  font-light">
                                    Proxora GmbH
                                </Timeline.Title>
                            </Timeline.Title>
                            <Timeline.Body>
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                </Timeline>
            </div>
        </>
    );
};

export default WorkExperience;