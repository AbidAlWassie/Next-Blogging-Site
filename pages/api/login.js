import { NextApiRequest, NextApiResponse } from "next"

export default function Login(req, res) {
  res.json({hello: 'world', method: req.method});
}
