type Statistics = {
    cpuUsage: number;
    ramUsage: number;
    storageUsage: number;
};

type StaticData = {
    totalStorage: number;
    cpuModel: string;
    totalMemoryGB: number;
}

type EventPayloadMapping = {
    statistics: Statistics;
    getStaticData: StaticData;
}

// If we define an interface 'like window' again it means to merge it to the existing one!
interface Window {
    electron: {
        subscribeStatistics: (callback: (statistics: Statistics)=> void)=> void;
        getStaticData: ()=> Promise<StaticData>
    }
}