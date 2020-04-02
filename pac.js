function FindProxyForURL(url, host)
{
  if(shExpMatch(host, "*google*"))
      return "PROXY 172.16.90.57:3128"; //NTLM

  return "DIRECT";
}
