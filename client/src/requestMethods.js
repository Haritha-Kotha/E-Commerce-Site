import axios from "axios";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzAwYThiM2NmOTAyY2FlOWJhZTU0ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMjA0Njk5NCwiZXhwIjoxNzAyMzkyNTk0fQ.vrIN6eQyXQWNOuoEIh1uy1fRQMuMOxiu9AgQvULosCc"

export const userRequest = axios.create({
    headers : {token : `Bearer ${TOKEN}`}
})