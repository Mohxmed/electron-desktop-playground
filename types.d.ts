type Statistics = {
    cpuUsage: number;
    ramUsage: number;
    storageData: number;
};

type Static = {
    totalStorage: number;
    cpuModel: string;
    totalMemoryGB: number;
}

interface Window {
    electron: {
    }
}