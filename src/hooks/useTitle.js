/**
* Objective: To update title dynamically when any page is visited.
* Date Created:
* Modified:
*/
import { useEffect } from "react";

export const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} - CodeBook`;
    }, [title]);

  return null;
}