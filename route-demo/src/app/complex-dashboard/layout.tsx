export default function ComplexDashboardLayout({
  children,
  notifications,
  revenue,
  users,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
     {children}

     <div style={{ flex: 1, padding: "20px" }}>
        <div>{notifications}</div>
        <div>{users}</div>
        <div>{revenue}</div>

     </div>
      
    </div>
  );
}
