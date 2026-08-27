export function MoodBoardItem({ color, image, description }) {
    const defaultStyles = {
        backgroundColor: color
    }
    return (
        <div className="mood-board-item" style={defaultStyles}>
            <img src={image} alt="" className="mood-board-image" />
            <h3 className="mood-board-text">{description} </h3>
        </div>
    )
}

export function MoodBoard() {
    return (
        <div>
            <h1 className="mood-board-heading">Destination Mood Board</h1>
            <div className="mood-board">
                <MoodBoardItem color={"blue"} image={"https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg"} description={'Happy'} />
                <MoodBoardItem color={"orange"} image={"https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"} description={"Coasts of Costa Rica"}/>
                <MoodBoardItem color={"purple"} image={"https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg"} description={"The wonderful beaches of Santorini"}/>
                <MoodBoardItem color={"grey"} image={"https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"} description={"Touch grass small"}/>
            </div>
        </div>
    )


}