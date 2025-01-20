import { Timeline } from "flowbite-react";



const Education = () => {
    return (
        <>
            <div className="content-center flex-col w-96 p-4 ">
                <h2 className='text-3xl font-extrabold text-white'>Education</h2>
            </div>
            <div className="content-center flex-col w-3/4 p-4 ">

                <Timeline>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time>
                                10/2022 - Today
                            </Timeline.Time>
                            <Timeline.Title className="text-white  ">
                                Ludwig-Maximilians-Universität München
                                <Timeline.Title className="text-white  font-light">
                                    B.Sc. Computer Science, Minor B.Sc. Business Administration
                                </Timeline.Title>
                            </Timeline.Title>
                            <Timeline.Body>
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time>
                                09/2014 - 07/2022
                            </Timeline.Time>
                            <Timeline.Title className="text-white  ">
                                Willstätter-Gymnasium Nürnberg
                                <Timeline.Title className="text-white  font-light">
                                    Abitur
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

export default Education;