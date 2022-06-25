interface IProps {
    page: number
}

const TourPagePagination: React.FC<IProps> = ({ page }) => {
    return (
        <div className="w-full flex justify-center">
            <div className="btn-group">
                <button className="btn">«</button>
                <button className="btn">Page {page}</button>
                <button className="btn">»</button>
            </div>
        </div>
    )
}

export default TourPagePagination
