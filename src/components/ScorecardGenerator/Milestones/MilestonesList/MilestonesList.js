import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { getAllMilestones } from "../../../../modules/MilestonesAwardsManager"
import { AddMilestoneCard } from "../AddMilestoneCard/AddMilestoneCard"

export const MilestonesList = () => {
    // Need to wait until milestones are loaded
    const [milestonesLoaded, setMilestonesLoaded] = useState(false);

    // Create an array for all available Milestones
    const [milestonesArray, setMilestonesArray] = useState([]);

    // Create an array for all Milestone cards
    const [cardArray, setCardArray] = useState([])




    // Initialize milestones array to an array of milestones objects
    useEffect(() => {
        getAllMilestones()
            .then(milestones => {
                // Set available milestones array
                setMilestonesArray(milestones);
                console.log("setmilestonesarray")
                console.log(milestonesArray);
                setMilestonesLoaded(true);
            })
    }, [])

    // Initializes the card array to five empty cards once the milestones are loaded
    useEffect(() => {
        console.log(milestonesArray)
        console.log("setcardarray")
        setCardArray(Array(5).fill(<AddMilestoneCard milestonesProp={milestonesArray} />))
    }, [milestonesLoaded])


    return (
        <>
            <Container className="mt-5">
                <Row>
                    <h1 className="text-center">Milestones</h1>
                </Row>
                <Row className="justify-content-between mt-2">
                    {cardArray.map((element, index) => {
                        return (
                            <Col key={index} md="2">
                                {element}
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}