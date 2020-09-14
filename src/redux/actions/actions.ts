import {
    SET_ACTION_KEY,
    SET_DEVICE_KEY,
    SET_HASHCODE_PROJECTS,
    SET_PROJECT_KEY,
    SET_MODE_WORK,
    SET_ID_USER,
    SET_RESULT_CHECK_LIST,
    SET_TODO_KEY,
    SET_STEP_KEY,
} from "./types";
import {
    iProjectKey,
    iTodoKey,
    iDeviceKey,
    iStepKey,
    iActionKey,
    iModeWork,
    iUserId,
    iResultCheckList,
    iHashcodeProjects,
} from "../../types/reduxTypes";

export function setIdUser(value: string): iUserId{
    return{
        type: SET_ID_USER,
        idUser: value,
    }
};

export function setResultChecklist(value: Array<Object>): iResultCheckList{
    return{
        type: SET_RESULT_CHECK_LIST,
        listResultsCheckList: value
    }
};

export function setHashCodeProjects(value: Array<Object>): iHashcodeProjects{
    return{
        type: SET_HASHCODE_PROJECTS,
        listHashcodeProjects: value
    }
};

export function setModeWork(value: string): iModeWork{
    return {
        type: SET_MODE_WORK,
        modeWork: value
    }
};

export function setActionKey(value: number): iActionKey{
    return{
        type: SET_ACTION_KEY,
        actionKey: value
    };
};

export function setProjectKey(value: number): iProjectKey{
    return{
        type: SET_PROJECT_KEY,
        projectKey: value
    };
};

export function setTodoKey(value: number): iTodoKey{
    return{
        type: SET_TODO_KEY,
        todoKey: value
    };
};

export function setDeviceKey(value: number): iDeviceKey{
    return{
        type: SET_DEVICE_KEY,
        deviceKey: value
    };
};

export function setStepKey(value: number): iStepKey{
    return{
        type: SET_STEP_KEY,
        stepKey: value
    };
};