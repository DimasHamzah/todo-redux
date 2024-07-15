import DeleteIcon from "./delete-icon";
import EditIcon from "./edit-icon";

export default function CardItem({ title, description }) {
    return (
        <div className={'col-span-12 md:col-span-4 lg:col-span-3 border border-[#5E4D4D] rounded-xl p-6 space-y-6'}>
            <div className={'space-y-6 lg:space-y-2'}>
                <h5 className={'text-[#2B2B2B] text-lg font-semibold leading-[1.8px]'}>{title}</h5>
                <p className={'text-[#464646] text-sm font-normal tracking-[0.28px]'}>{description}</p>
            </div>
            <div className={'flex space-x-4 items-center'}>
                <div className={'cursor-pointer'}>
                    <DeleteIcon/>
                </div>
                <div className={'cursor-pointer'}>
                    <EditIcon/>
                </div>
            </div>
        </div>
    )
}