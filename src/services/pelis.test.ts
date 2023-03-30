import { get_pelis } from "controllers/pelis";
import { call_get_pelis } from "./pelis";
import httpMock from 'node-mocks-http'

var httpMocks = require('node-mocks-http')

// const mock_call_get_pelis = jest.fn(call_get_pelis) as jest.Mock

test ('Recepción del json de forma correcta por parte del controller', async () => {

    // const mock_service = mock_call_get_pelis.mockReturnValueOnce({})

    // console.log(mock_service)

    const mock_req = httpMock.createRequest({
        method: 'GET',
        url: '/pelis',
    })
    const mock_res = httpMock.createResponse()

//  const data = await get_pelis(mock_req, mock_res)

   await expect(get_pelis(mock_req, mock_res)).resolves.toBe({})
   
})