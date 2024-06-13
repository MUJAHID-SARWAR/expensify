import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/user";

export const store = configureStore({
  reducer: {
    user,
  },
});

 {/* <TouchableOpacity
          
          className="p-2 px-3 bg-white border border-gray-200 rounded-full"
        >
          <Text className={Colors.heading}>Logout</Text>
        </TouchableOpacity> */}
