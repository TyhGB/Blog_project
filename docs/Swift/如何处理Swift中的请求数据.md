# 如何处理Swift中的请求数据

主要使用 SwiftyJSON、 HandyJSON、ObejctMapper 这三个第三方库，大概的使用方式可以参考 ： https://www.cnblogs.com/sundaysme/articles/12051836.html



对于 Swift中的网络请求数据，我们通常会使用Alamofire来请求，从而得到返回的数据。对于这些数据，一般会转换成方便处理的json格式数据。
但是Swift对于json序列化成的dictionary处理往往都是可选的（Optional），需要进行解包（Wrapping, if let, !）操作.
所以诞生了SwiftyJSON，主要来应对处理swift对于json数据处理过程中麻烦的可选和解包等操作。
