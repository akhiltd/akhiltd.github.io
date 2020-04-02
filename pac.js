function FindProxyForURL(url, host)
{
  if(shExpMatch(host, "*google*"))
      return "PROXY 172.16.90.57:3128"; //NTLM
  if(shExpMatch(host, "*facebook*"))
      return "PROXY 172.16.91.42:3128"; //Basic Auth
  return "DIRECT";
}
