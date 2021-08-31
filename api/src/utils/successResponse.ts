interface SuccessResponseType {
  status: string;
  payload: any;
}

function successResponse(payload: any): SuccessResponseType {
  return {
    status: 'Success',
    payload,
  };
}

export default successResponse;
