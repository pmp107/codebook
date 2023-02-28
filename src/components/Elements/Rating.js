export const Rating = ({rating}) => {
    //Initially setting all values in ratingArray to false and then depending upon $rating will pass filled/unfilled stars to components.
    let ratingArray = Array(5).fill(false);
    for(let i=0; i<rating; i++){
        ratingArray[i] = true;
    }

  return (
    <>
        { ratingArray.map((value, index) => (
            value ? (
                <i key={index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
            ) : (
                <i key={index} className="text-lg bi bi-star text-yellow-500 mr-1"></i>
            )
        )) }
    </>
  )
}
