import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const SubHeader = (props) => {
	return (
		<div className="flex flex-row m-5 justify-between">
			<h1 className="text-2xl font-semibold text-primary capitalize">
				{props.title}s
			</h1>
			{props.MembersPage === "MembersPage" ? ""
				: <Link to={`/${props.title}s/new`} className="btn btn-primary">
					<FaPlus />
					{`NEW ${props.title}`}
				</Link>}

		</div>
	);
};

export default SubHeader;
