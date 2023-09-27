# Fetch and prepare the BACKEND_IP env var
export API_URL="http://${BACKEND_IP}:3030"
echo "${API_URL}"
if curl "${API_URL}/api/status" | grep "ok"
then
  	return 0
else
  	return 1
fi
