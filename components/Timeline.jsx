const TIMELINE_DATA = [
    {
        year: 2019,
        description: "We opened this year!",
        image: ""
    },
    {
        year: 2020,
        description: "Another year happened",
        image: ""
    },
    {
        year: 2021,
        description: "Topan joined this year :)",
        image: ""
    },
    {
        year: 2022,
        description: "This is the current year",
        image: ""
    }
];

const TIMELINE_CONTAINER = "bg-white flex flex-col items-center p-10"

const Timeline = () => {
    return (
        <div className={TIMELINE_CONTAINER}>
            <div className="border-l-4 border-[#7055FD] rounded-lg h-24" />
        </div>
    )
}

export default Timeline;
