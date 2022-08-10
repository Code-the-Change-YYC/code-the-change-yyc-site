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

const TIMELINE_CONTAINER = "bg-white flex flex-col"

const Timeline = () => {
    return (
        <>
        <div className={TIMELINE_CONTAINER}>
            <div className="flex flex-row">
                <div className="flex flex-col w-48">
                    <div className="box-border h-24 w-24 bg-[#BAFBE4] drop-shadow-md" />
                    <div className="flex flex-row ml-auto mt-10">
                        <div className="px-5 text-5xl font-semibold">2019</div>
                        <div className="top-1/2 relative border-t-4 border-[#7055FD] w-10" />
                    </div>
                    <div className="w-40">Code the Change YYC began as an organization in 2019. </div>
                </div>
                <div className="border-l-4 border-[#7055FD] h-30" />
                <div className="box-border h-36 w-36 bg-[#A689FF] ml-8 mt-16 drop-shadow-md" />
            </div>
        </div>
        <div className={TIMELINE_CONTAINER}>
            <div className="flex flex-row">
                <div className="w-48">
                    <div className="box-border h-36 w-36 bg-[#A689FF] mr-12 mt-16 drop-shadow-md" />
                </div>
                <div className="border-l-4 border-[#7055FD] h-30" />
                <div className="flex flex-col">
                    <div className="box-border h-24 w-24 bg-[#BAFBE4] ml-8 drop-shadow-md" />
                    <div className="flex flex-row ml-auto mt-10">
                        <div className="top-1/2 relative border-t-4 border-[#7055FD] w-10" />
                        <div className="px-5 text-5xl font-semibold">2020</div>
                    </div>
                    <div className="w-40 ml-8">Code the Change YYC began as an organization in 2019. </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Timeline;
