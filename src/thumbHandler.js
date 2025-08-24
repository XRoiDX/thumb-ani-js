async function GenerateImage(episodeId) {
    const url = `https://thumbani.vercel.app/upload/${episodeId}`
    const response = await fetch(url, { method: 'GET' })
    if (response.status === 200) {
        return await response.json()
    }
    else {
        return false
    }
}

async function GenerateThumbnail(episodeId) {
    const url = `https://thumbani.vercel.app/thumb/${episodeId}`
    const response = await fetch(url, { method: 'GET' })
    if (response.status === 200) {
        return await response.json()
    }
    else {
        return false
    }
}

export { GenerateImage,GenerateThumbnail }
