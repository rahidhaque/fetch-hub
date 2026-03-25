const getStoredApps = () =>{
    const storedAppsSTR = localStorage.getItem('apps');

    if(storedAppsSTR){
        const storedApps = JSON.parse(storedAppsSTR);
        return storedApps;
    }
    else{
        return [];
    }
}

const removeFromStoredDB = (id) =>{
    const storedApps = getStoredApps();
    const remainingApps = storedApps.filter(appId => appId !== id);
    const data = JSON.stringify(remainingApps);
    localStorage.setItem('apps', data);
}

const addToStoredDB = (id) =>{
    const storedApps = getStoredApps();
    if(storedApps.includes(id)){
        return;
    }
    else{
        storedApps.push(id);
        const data = JSON.stringify(storedApps);
        localStorage.setItem('apps', data);
    }
}

export {addToStoredDB, getStoredApps, removeFromStoredDB};