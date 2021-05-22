import { useEffect } from "react"
import { logout } from "../../store/actions/auth";
import { useDispatch } from "react-redux";

export default function Logout({ history }) {
  const dispatch = useDispatch();

  useEffect(() => {
    logout(dispatch);
    history.replace("/");
  }, [dispatch, history]);

  return null;
}