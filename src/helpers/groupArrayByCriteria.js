export default function groupArrayByCriteria(unsortedArray, sortingCriteria) {

    const sortedArray = unsortedArray.reduce(function (accumulator, currentValue) {

      if ( !accumulator[currentValue[sortingCriteria]] ) { accumulator[currentValue[sortingCriteria]] = [] }

      accumulator[currentValue[sortingCriteria]].push(currentValue)

      return accumulator

    }, [])

    return sortedArray

}