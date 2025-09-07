const url = 'http://localhost:5000';
export const submitRecord = async (data) => {
    try {
        const response = await fetch(`${url}/api/record`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error submitting record:', error);
        throw error;
    }
};