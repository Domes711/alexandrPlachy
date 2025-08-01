import { useEffect, useState, type ReactNode } from "react";
import CryptoJS from 'crypto-js';
import { useLocation, useNavigate } from "react-router-dom";

export type FeAuthProps = {
  children: ReactNode;
}
const expectedHash = '1362774ae7e62d86136adceb0e2850bfad57dbc78297814189a9a3188e57b2d0';

export const FeAuth = ({ children }: FeAuthProps) => {
const location = useLocation();
  const navigate = useNavigate();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('t');
    console.log({ token })
    if (!token) {
      navigate('/unauthorized');
      return;
    }

    const hash = CryptoJS.SHA256(token).toString();

    if (hash === expectedHash) {
      setAuthorized(true);
    } else {
      navigate('/unauthorized');
    }
  }, [location.search, navigate]);

  if (!authorized) return null;

  return (children);
}