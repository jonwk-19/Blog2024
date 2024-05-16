import { useState } from "react";
import toast from "react-hot-toast";
import { getExp as getExpApi} from "../../services/api";

export const useExp = () => {
    const [exp, setExp] = useState([]);
    const [loading, setLoading] = useState(false);

    const getExp = async () => {
        setLoading(true);
        try {
            const response = await getExpApi();
            setExp(response.data);
            toast.success('Experience list read successfully');
        } catch (error) {
            toast.error('Upss! an error occurred while reading the experience list');
        } finally {
            setLoading(false);
        }
    }

    return {
        getExp,
        loading,
        exp
    }
}