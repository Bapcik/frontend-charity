import { useParams } from "react-router-dom";
import { DetailCard } from "../../components/DetailCard/DetailCard"
import { useGetCharityId } from "../../services/useGetCharityId";

export const DetailCardPage = () =>{
    const { id } = useParams();
	const { data, isLoading  } = useGetCharityId(id!);

    if (isLoading) {
		return ('Loading...');
	}
    return(
        <div>
            <DetailCard data={data}/>
        </div>
    )
}