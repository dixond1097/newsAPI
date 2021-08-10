import React from "react";
import model from "../models/news";

const UserContext = React.createContext({
    list: [] as model[],
    setList: (r:model[]) => {}
})
export default UserContext;