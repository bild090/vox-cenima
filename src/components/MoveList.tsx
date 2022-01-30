import { apiTest } from "./shared/apiTest";

import Card from "./Helpers/Card";

const MoveList = () => {

    return (
        <>
            <div className="mt-5">
                <div className="card mx-5 p-3 text-start">
                    <div className="row">
                        {
                            apiTest.map((movie, index) => {
                                return (
                                    <Card key={index} content={movie} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default MoveList;