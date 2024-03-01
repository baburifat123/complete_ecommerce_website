import { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import myContext from "../../context/Data/MyContext";

const Oder = () => {
  const contect = useContext(myContext);
  const { order } = contect;
  const userid = JSON.parse(localStorage.getItem("user")).uid;

  return (
    <Layout>
      {order.length > 0 ? (
        <>
          <div className=" h-[80vh] pt-10">
            {order
              .filter((obj) => obj.userid == userid)
              .map((order, index) => {
                // order.cartItems.map()
                return (
                  <div
                    key={index}
                    className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0"
                  >
                    {order.cartitem.map((item, index) => {
                      return (
                        <div key={index} className="rounded-lg md:w-2/3">
                          <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                            <img
                              src={item.imageUrl}
                              alt="product-image"
                              className="w-full rounded-lg sm:w-40"
                            />
                            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                              <div className="mt-5 sm:mt-0">
                                <h2 className="text-lg font-bold text-gray-900">
                                  <span className="text-xl font-semibold">
                                    Name:
                                  </span>{" "}
                                  {item.title}
                                </h2>
                                <p className="mt-1 text-xs text-gray-700">
                                  <span className="text-xl font-semibold">
                                    Description:
                                  </span>{" "}
                                  {item.description}
                                </p>
                                <p className="mt-1 text-xs text-gray-700">
                                  <span className="text-xl font-semibold">
                                    price:$
                                  </span>{" "}
                                  {item.price}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
          </div>
        </>
      ) : (
        <h2 className=" text-center tex-2xl text-white">Not Order</h2>
      )}
    </Layout>
  );
};

export default Oder;
