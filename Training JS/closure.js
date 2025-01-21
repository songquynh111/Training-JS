function createLogger(namespace) {
    function logger(message) {
        console.log(`[${namespace}] ${message}`);
    }

    return logger
}

// const infoLogger = createLogger('Info');
// infoLogger('Bắt đầu gửi mail')

function creatStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {};

    const save = () =>{
        localStorage.setItem(key,JSON.stringify(store));
    }

    const storage = {
        get(key) {
            return store[key]
        },
        set(key, value) {
            store[key] = value;
            save();
        },
        remove(key) {
            delete store[key];
            save();
        }
    }

    return storage
}

const ProfileSetting = creatStorage('profile_setting');
console.log(ProfileSetting.get('fullname'));
ProfileSetting.set('fullname','Dainv')
ProfileSetting.set('age',20)
ProfileSetting.set('place','HN')